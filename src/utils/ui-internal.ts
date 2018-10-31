/**
 * @author    : Adarsh Pastakia
 * @version   : 5.0.0
 * @copyright : 2018
 * @license   : MIT
 */
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import {
  Container,
  DOM,
  Task,
  TaskQueue,
  View,
  ViewCompiler,
  ViewResources
} from "aurelia-framework";

export namespace UIInternal {
  export const EVT_VIEWPORT_CLICK = "EVT_VIEWPORT_CLICK";
  export const EVT_VIEWPORT_RESIZE = "EVT_VIEWPORT_RESIZE";

  // Task queue shortcut
  export function queueTask(task: () => AnyObject | Task): void {
    Container.instance.get(TaskQueue).queueTask(task);
  }
  export function queueMicroTask(task: () => AnyObject | Task): void {
    Container.instance.get(TaskQueue).queueMicroTask(task);
  }

  // Event aggregation shortcut
  export function broadcast(name: string, data?: AnyObject): void {
    Container.instance.get(EventAggregator).publish(name, data);
  }
  export function subscribe(name: string, callback: AnyObject): Subscription {
    return Container.instance.get(EventAggregator).subscribe(name, callback);
  }
  export function subscribeOnce(name: string, callback: AnyObject): Subscription {
    return Container.instance.get(EventAggregator).subscribeOnce(name, callback);
  }

  export function createEvent<T = {}>(name: string, data?: T): CustomEvent {
    return DOM.createCustomEvent(name, {
      bubbles: true,
      cancelable: true,
      detail: data
    });
  }

  export function fireCallbackEvent(
    vm: AnyObject,
    event: string,
    data?: AnyObject
  ): Promise<boolean> {
    const ret = isFunction(vm[event])
      ? vm[event](data)
      : vm.element.dispatchEvent(UIInternal.createEvent(event, data));
    if (ret instanceof Promise) {
      return ret;
    } else {
      return Promise.resolve(ret !== false);
    }
  }

  export function compileTemplate(tpl: string, viewModel: AnyObject = {}): View {
    const viewFactory = Container.instance
      .get(ViewCompiler)
      .compile(tpl, Container.instance.get(ViewResources));
    const view = viewFactory.create(Container.instance);
    view.bind(viewModel);
    return view;
  }
}
