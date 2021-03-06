/**
 * @author    : Adarsh Pastakia
 * @version   : 5.0.0
 * @copyright : 2018
 * @license   : MIT
 */
import { Subscription } from "aurelia-event-aggregator";
import { bindable, containerless, customElement, inlineView } from "aurelia-framework";
import { UIInternal } from "../utils/ui-internal";
import { UITether } from "../utils/ui-tether";

@containerless()
@customElement("ui-drop")
@inlineView(
  `<template><div slot="ui-drop" class="ui-drop" mouseup.delegate="closeDrop()" data-open.bind="isOpen">
  <div ref="vmElement" class="ui-drop__body \${class}" mouseup.delegate="close($event)"><slot></slot></div>
  </div></template>`
)
export class UIDrop {
  @bindable()
  public class: string = "";

  public vmElement: HTMLDivElement;

  public isOpen: boolean = false;
  public stretch: boolean = true;
  public closeOnClick: boolean = true;
  public attachToViewport: boolean = false;

  public position: UITether.Position;
  public anchorPosition: UITether.Position;
  private tetherObj: UITether.Tether;

  private anchorEl: Element;
  private obClick: Subscription;
  private obResize: Subscription;

  constructor(protected element: Element) {
    this.position = (element.getAttribute("position") as UITether.Position) || "tl";
    this.anchorPosition = (element.getAttribute("anchor") as UITether.Position) || "bl";
    this.closeOnClick = !isFalse(element.getAttribute("close-on-click"));
    this.attachToViewport = element.hasAttribute("attach-to-viewport");
  }

  public tether(anchorEl: Element) {
    this.tetherObj = UITether.tether((this.anchorEl = anchorEl), this.vmElement, {
      anchorPosition: this.anchorPosition,
      attachToViewport: this.attachToViewport,
      position: this.position,
      resize: this.stretch
    });
  }

  public updatePosition() {
    this.tetherObj.updatePosition();
  }

  public toggleDrop(open?: boolean): void {
    this.disposeListeners();
    this.vmElement.dataset.show = "false";
    this.isOpen = open === undefined ? !this.isOpen : open;
    if (this.isOpen) {
      this.obClick = UIInternal.subscribe(UIInternal.EVT_VIEWPORT_CLICK, t => this.canClose(t));
      this.obResize = UIInternal.subscribe(UIInternal.EVT_VIEWPORT_RESIZE, t =>
        this.updatePosition()
      );
      UIInternal.queueMicroTask(() => {
        this.tetherObj.updatePosition();
        this.vmElement.dataset.show = "true";
      });
    }
  }

  public closeDrop() {
    UIInternal.queueTask(() => {
      this.isOpen = false;
      this.disposeListeners();
      this.element.dispatchEvent(UIInternal.createEvent("close"));
    });
  }

  protected disposeListeners(): void {
    if (this.obClick) {
      this.obClick.dispose();
    }
    if (this.obResize) {
      this.obResize.dispose();
    }
  }

  protected detached(): void {
    this.disposeListeners();
    if (this.tetherObj) {
      this.tetherObj.dispose();
    }
  }

  private canClose(t: Element): void {
    if (!hasParent(t, this.vmElement) && !hasParent(t, this.anchorEl)) {
      this.closeDrop();
    }
  }

  private close($event: UIEvent) {
    $event.stopEvent();
    if (this.closeOnClick) {
      this.closeDrop();
    }
  }
}
