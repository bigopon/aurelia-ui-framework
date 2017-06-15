"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_validation_1 = require("aurelia-validation");
var ui_event_1 = require("../../utils/ui-event");
var ui_data_source_1 = require("../../data/ui-data-source");
var _ = require("lodash");
var UIDgCell = (function () {
    function UIDgCell(element, container, compiler) {
        this.element = element;
        this.container = container;
        this.compiler = compiler;
    }
    UIDgCell.prototype.attached = function () {
        if (this.element.innerHTML)
            return;
        var template = '';
        if (this.type == 'subview') {
            if (isFunction(this.parent.subview))
                template = this.parent.subview({ record: this.record });
            else
                template = this.parent.subview;
        }
        else if (this.type == 'editor') {
            var editor = { type: 'none' };
            if (typeof this.col.editor === 'string')
                editor.type = this.col.editor;
            else if (typeof this.col.editor === 'object')
                editor = this.col.editor;
            template = '<span>&nbsp;</span>';
            if (editor.type == 'text')
                template = '<ui-input clear value.bind="record[col.dataId] & validate"></ui-input>';
            else if (editor.type == 'decimal')
                template = '<ui-input decimal.bind="record[col.dataId] & validate"></ui-input>';
            else if (editor.type == 'date')
                template = '<ui-date date.bind="record[col.dataId] & validate"></ui-date>';
            else if (editor.type == 'datetime')
                template = '<ui-date datetime date.bind="record[col.dataId] & validate"></ui-date>';
            else if (editor.type == 'time')
                template = '<ui-date time date.bind="record[col.dataId] & validate"></ui-date>';
            else if (this.col.type == 'normal') {
                template = "<span class=\"${col.class}\" innerhtml.bind='col.getValue(record[col.dataId],record)'></span>";
                this.element.classList.add('display');
            }
            else if (this.col.type == 'glyph') {
                template = "<div title.bind=\"col.getTooltip(record[col.dataId],record)\">\n          <ui-glyph class=\"${col.class} ${col.getGlyph(record[col.dataId],record)}\" glyph.bind=\"col.getGlyph(record[col.dataId],record)\"></ui-glyph>\n          </div>";
                this.element.classList.add('display');
            }
        }
        else if (this.col.type == 'normal')
            template = "<span class=\"${col.class}\" innerhtml.bind='col.getValue(record[col.dataId],record)'></span>";
        else if (this.col.type == 'glyph')
            template = "<div title.bind=\"col.getTooltip(record[col.dataId],record)\">\n        <ui-glyph class=\"${col.class} ${col.getGlyph(record[col.dataId],record)}\" glyph.bind=\"col.getGlyph(record[col.dataId],record)\"></ui-glyph>\n        </div>";
        else if (this.col.type == 'link')
            template = "<a class=\"ui-link ${col.class} ${col.isDisabled(record[col.dataId],record)?'ui-disabled':''}\" click.trigger=\"col.fireClick($event,record[col.dataId],record)\" show.bind=\"col.isVisible(record[col.dataId],record)\">\n          <ui-glyph glyph.bind=\"col.getGlyph(record[col.dataId],record)\" if.bind=\"col.glyph\"></ui-glyph>\n          <span innerhtml.bind=\"col.getLabel(record[col.dataId],record)\"></span>\n        </a>";
        else if (this.col.type == 'button') {
            template = "<ui-button click.trigger=\"col.fireClick($event,record[col.dataId],record)\" show.bind=\"col.isVisible(record[col.dataId],record)\" theme.bind=\"col.getTheme(record[col.dataId],record)\" small square glyph.bind=\"col.getGlyph(record[col.dataId],record)\" disabled.bind=\"col.isDisabled(record[col.dataId],record)\" dropdown.bind=\"col.dropdown\" menuopen.trigger=\"col.fireMenuOpen($event, record)\">\n          <span innerhtml.bind=\"col.getLabel(record[col.dataId],record)\"></span>\n        </ui-button>";
            this.element.classList.add('btn-fix');
        }
        var viewFactory = this.compiler.compile("<template>" + template + "</template>");
        var view = viewFactory.create(this.container);
        view.bind(this);
        this.slot = new aurelia_framework_1.ViewSlot(this.element, true);
        this.slot.add(view);
        this.slot.attached();
    };
    UIDgCell.prototype.bind = function () {
        if (this.slot)
            this.slot.attached();
    };
    UIDgCell.prototype.detached = function () {
        if (this.slot)
            this.slot.detached();
    };
    return UIDgCell;
}());
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIDgCell.prototype, "col", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIDgCell.prototype, "type", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIDgCell.prototype, "record", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIDgCell.prototype, "parent", void 0);
UIDgCell = __decorate([
    aurelia_framework_1.autoinject(),
    aurelia_framework_1.inlineView("<template></template>"),
    aurelia_framework_1.customElement('ui-dg-cell'),
    __metadata("design:paramtypes", [Element, aurelia_framework_1.Container, aurelia_framework_1.ViewCompiler])
], UIDgCell);
exports.UIDgCell = UIDgCell;
var UIDgRow = (function () {
    function UIDgRow(element) {
        this.element = element;
        this.level = 0;
        this.extraClass = '';
    }
    UIDgRow.prototype.bind = function (bindingContext, overrideContext) {
        if (this.level > 0 && !overrideContext.$first && overrideContext.$last)
            this.extraClass += ' last';
    };
    UIDgRow.prototype.attached = function () {
        var _this = this;
        ui_event_1.UIEvent.queueTask(function () {
            if (_this.rowExpand && _this.parent.expandWidth < _this.rowExpand.offsetWidth)
                _this.parent.expandWidth = _this.rowExpand.offsetWidth;
            if (_this.rowCounter && _this.parent.counterWidth < _this.rowCounter.offsetWidth)
                _this.parent.counterWidth = _this.rowCounter.offsetWidth;
        });
    };
    UIDgRow.prototype.indexChanged = function () {
        var _this = this;
        ui_event_1.UIEvent.queueTask(function () {
            if (_this.rowExpand && _this.parent.expandWidth < _this.rowExpand.offsetWidth)
                _this.parent.expandWidth = _this.rowExpand.offsetWidth;
            if (_this.rowCounter && _this.parent.counterWidth < _this.rowCounter.offsetWidth)
                _this.parent.counterWidth = _this.rowCounter.offsetWidth;
        });
    };
    UIDgRow.prototype.saveChanges = function (record) {
        this.parent.controller.validate()
            .then(function (e) {
            if (e.valid) {
                record.saveChanges();
                record.__editing__ = false;
            }
        });
    };
    return UIDgRow;
}());
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIDgRow.prototype, "level", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIDgRow.prototype, "index", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIDgRow.prototype, "record", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIDgRow.prototype, "parent", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIDgRow.prototype, "odd", void 0);
UIDgRow = __decorate([
    aurelia_framework_1.autoinject(),
    aurelia_framework_1.inlineView("<template><div class=\"ui-dg-row level-${level} ${record.isOpen?'ui-expanded':''} ${parent.selected==record?'ui-selected':''} ${extraClass} ${odd?'even':'odd'}\" click.trigger=\"parent.fireSelect(record, $event)\" dblclick.trigger=\"parent.editable?parent.makeEditable($event,record):null\">\n    <div class=\"ui-dg-lock-holder\" css.bind=\"{transform: 'translateX('+parent.scrollLeft+'px)'}\">\n      <div class=\"ui-dg-expander\" if.bind=\"parent.rowExpander\" ref=\"rowExpand\" click.trigger=\"$event.stopPropagation()\" css.bind=\"{'min-width': parent.expandWidth+'px'}\">\n        <ui-glyph glyph=\"glyph\" repeat.for=\"i of level\"></ui-glyph>\n        <a click.trigger=\"record.isOpen=!record.isOpen\" if.bind=\"record.subdata||parent.subview\"><ui-glyph glyph=\"${record.isOpen?'glyph-icon-minus':'glyph-icon-plus'}\"></ui-glyph></a>\n      </div>\n      <div class=\"ui-dg-expander ui-text-center\" if.bind=\"parent.rowCounter\" click.trigger=\"$event.stopPropagation()\" ref=\"rowCounter\" css.bind=\"{'min-width': parent.counterWidth+'px'}\">${index}</div>\n      <ui-dg-cell class=\"ui-dg-cell ${col.align}\" repeat.for=\"col of parent.colLocked\" css.bind=\"{width:col.getWidth(col.width)+'px'}\"\n      col.bind=\"col\" parent.bind=\"parent\" record.bind=\"record\">\n      </ui-dg-cell>\n    </div>\n    <ui-dg-cell class=\"ui-dg-cell ${col.align}\" repeat.for=\"col of parent.cols\" css.bind=\"{width:col.getWidth(col.width)+'px'}\" col.bind=\"col\" parent.bind=\"parent\" record.bind=\"record\">\n    </ui-dg-cell>\n\n    <div class=\"ui-dg-edit-row\" if.bind=\"record.__editing__\" click.trigger=\"$event.stopPropagation()\">\n      <div class=\"ui-dg-input-row\" validation-renderer=\"ui-validator\">\n        <div class=\"ui-dg-lock-holder\" css.bind=\"{transform: 'translateX('+parent.scrollLeft+'px)'}\">\n        <div class=\"ui-dg-expander\" if.bind=\"parent.rowExpander\" css.bind=\"{'min-width': parent.expandWidth+'px'}\"></div>\n        <div class=\"ui-dg-expander ui-text-center\" if.bind=\"parent.rowCounter\" css.bind=\"{'min-width': parent.counterWidth+'px'}\"></div>\n        <ui-dg-cell class=\"ui-dg-input-cell\" css.bind=\"{width:col.getWidth(col.width)+'px'}\" parent.bind=\"parent\" record.bind=\"record\" type=\"editor\" col.bind=\"col\" repeat.for=\"col of parent.colLocked\"></ui-dg-cell>\n        </div>\n        <ui-dg-cell class=\"ui-dg-input-cell\" css.bind=\"{width:col.getWidth(col.width)+'px'}\" parent.bind=\"parent\" record.bind=\"record\" type=\"editor\" col.bind=\"col\" repeat.for=\"col of parent.cols\"></ui-dg-cell>\n      </div>\n      <div class=\"ui-dg-input-buttons\" css.bind=\"{transform: 'translateX('+parent.scrollLeft+'px)'}\">\n        <ui-button small click.trigger=\"[saveChanges(record), $event.stopPropagation()]\">Update</ui-button>\n        <ui-button small click.trigger=\"[record.discardChanges(), record.__editing__=false, $event.stopPropagation()]\">Cancel</ui-button>\n      </div>\n    </div>\n  </div>\n  <div class=\"ui-dg-edit-shim\" if.bind=\"record.__editing__\"></div>\n\n\n  <ui-dg-row containerless if.bind=\"!parent.subview&&record.subdata&&record.isOpen\" index.bind=\"$index\" odd.bind=\"$odd\" level.bind=\"level+1\" parent.bind=\"parent\" record.bind=\"rec\" repeat.for=\"rec of record.subdata\"></ui-dg-row>\n\n  <div class=\"ui-dg-row\" if.bind=\"parent.subview && record.isOpen\" css.bind=\"{transform: 'translateX('+parent.scrollLeft+'px)'}\">\n    <div class=\"ui-dg-expander\" if.bind=\"parent.rowExpander\" click.trigger=\"$event.stopPropagation()\" css.bind=\"{'min-width': parent.expandWidth+'px'}\"></div>\n    <div class=\"ui-dg-expander ui-text-center\" if.bind=\"parent.rowCounter\" click.trigger=\"$event.stopPropagation()\" css.bind=\"{'min-width': parent.counterWidth+'px'}\"></div>\n    <ui-dg-cell class=\"ui-dg-subview\" parent.bind=\"parent\" record.bind=\"record\" type=\"subview\"></ui-dg-cell>\n  </div>\n</template>"),
    aurelia_framework_1.customElement('ui-dg-row'),
    __metadata("design:paramtypes", [Element])
], UIDgRow);
exports.UIDgRow = UIDgRow;
var UIDatagrid = (function () {
    function UIDatagrid(element, factory) {
        this.element = element;
        this.summaryRow = false;
        this.cols = [];
        this.colHead = [];
        this.colLocked = [];
        this.virtual = false;
        this.editable = false;
        this.rowCounter = false;
        this.rowExpander = false;
        this.expandWidth = 0;
        this.counterWidth = 0;
        this.isRtl = false;
        this.resizing = false;
        this.virtual = element.hasAttribute('virtual');
        this.editable = element.hasAttribute('editable');
        this.rowCounter = element.hasAttribute('row-counter');
        this.rowExpander = element.hasAttribute('row-expander');
        if (!element.hasAttribute('scroll'))
            this.element.classList.add('ui-auto-size');
        if (element.hasAttribute('hilight'))
            this.element.classList.add('ui-hilight');
        if (this.editable) {
            this.controller = factory.createForCurrentScope();
            this.controller.validateTrigger = aurelia_validation_1.validateTrigger.changeOrBlur;
        }
    }
    UIDatagrid.prototype.bind = function (bindingContext, overrideContext) {
        if (this.store && !(this.store instanceof ui_data_source_1.BaseDataSource))
            throw new Error('Store must be instance of UIDataSource');
        if (this.data)
            this.store = new ui_data_source_1.UILocalDS(this.data);
    };
    UIDatagrid.prototype.attached = function () {
        var _this = this;
        ui_event_1.UIEvent.queueTask(function () { return _this.columnsChanged(_this.columns); });
        if (this.store)
            ui_event_1.UIEvent.queueTask(function () { return (_this.store.paged) ? _this.store.loadPage() : _this.store.fetchData(); });
    };
    UIDatagrid.prototype.detached = function () {
        if (this.obPageChange)
            this.obPageChange.dispose();
        if (this.store)
            this.store.dispose();
    };
    UIDatagrid.prototype.columnsChanged = function (c) {
        this.colHead = _.sortBy(this.columns, 'locked');
        var cols = _.sortBy(_.flatMap(this.columns, function (c) { return c.columns || [c]; }), 'locked');
        this.colLocked = _.filter(cols, function (c) { return c.locked == 0; });
        this.cols = _.filter(cols, function (c) { return c.locked == 1; });
    };
    UIDatagrid.prototype.dataChanged = function (newValue) {
        var _this = this;
        this.store = new ui_data_source_1.UILocalDS(newValue);
        if (!this.store.isLoaded)
            ui_event_1.UIEvent.queueTask(function () { return _this.store.fetchData(); });
    };
    UIDatagrid.prototype.selectedChanged = function (newValue) {
        var _this = this;
        if (newValue == null)
            ui_event_1.UIEvent.queueTask(function () { return _this.selected = null; });
    };
    UIDatagrid.prototype.doSort = function (col) {
        if (!col.sortable || this.resizing)
            return;
        var sortOrder = 'asc';
        if (this.store.sortBy == col.dataId)
            sortOrder = this.store.orderBy == 'asc' ? 'desc' : 'asc';
        this.store.sort(col.dataId, sortOrder);
    };
    UIDatagrid.prototype.fireSelect = function (record, evt) {
        if (ui_event_1.UIEvent.fireEvent('beforeselect', this.element, ({ record: record })) !== false)
            ui_event_1.UIEvent.fireEvent('rowselect', this.element, ({ record: this.selected = record }));
    };
    UIDatagrid.prototype.makeEditable = function ($event, record) {
        $event.stopPropagation();
        $event.preventDefault();
        if (ui_event_1.UIEvent.fireEvent('beforeedit', this.element, ({ record: record })) !== false) {
            record.__editing__ = true;
        }
        return false;
    };
    UIDatagrid.prototype.resizeColumn = function (evt, col) {
        var _this = this;
        if (evt.button != 0)
            return true;
        this.isRtl = window.isRtl(this.element);
        this.diff = 0;
        this.colResize = col;
        this.resizing = true;
        this.startX = (evt.x || evt.clientX);
        this.ghost.style[this.isRtl ? 'left' : 'right'] = "none";
        this.ghost.style[this.isRtl ? 'right' : 'left'] = (getParentByClass(evt.target, 'ui-dg-cell').offsetLeft + parseInt(col.width)) + 'px';
        document.addEventListener('mouseup', this.stop = function (evt) { return _this.resizeEnd(evt); });
        document.addEventListener('mousemove', this.move = function (evt) { return _this.resize(evt); });
    };
    UIDatagrid.prototype.resize = function (evt) {
        var x = (evt.x || evt.clientX) - this.startX;
        x = (this.isRtl ? -1 : 1) * x;
        if (x < 0 && (parseInt(this.colResize.width) + x) <= (this.colResize.minWidth || 80))
            return;
        if (x > 0 && (parseInt(this.colResize.width) + x) >= (500))
            return;
        this.startX = (evt.x || evt.clientX);
        this.diff += x;
        this.colResize.width = (parseInt(this.colResize.width) + x);
        this.ghost.style[this.isRtl ? 'right' : 'left'] = (parseInt(this.ghost.style[this.isRtl ? 'right' : 'left']) + x) + 'px';
    };
    UIDatagrid.prototype.resizeEnd = function (evt) {
        this.resizing = false;
        document.removeEventListener('mousemove', this.move);
        document.removeEventListener('mouseup', this.stop);
        evt.stopPropagation();
        return false;
    };
    return UIDatagrid;
}());
__decorate([
    aurelia_framework_1.children('ui-dg-column-group,ui-dg-column,ui-dg-button,ui-dg-link,ui-dg-glyph'),
    __metadata("design:type", Object)
], UIDatagrid.prototype, "columns", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIDatagrid.prototype, "data", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIDatagrid.prototype, "store", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIDatagrid.prototype, "subview", void 0);
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
    __metadata("design:type", Object)
], UIDatagrid.prototype, "selected", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIDatagrid.prototype, "summaryRow", void 0);
UIDatagrid = __decorate([
    aurelia_framework_1.autoinject(),
    aurelia_framework_1.inlineView("<template class=\"ui-datagrid\"><div class=\"ui-hidden\"><slot></slot></div>\n<div show.bind=\"resizing\" ref=\"ghost\" class=\"ui-dg-ghost\"></div>\n<div ref=\"dgHead\" class=\"ui-dg-header\">\n  <div class=\"ui-dg-row\" css.bind=\"{transform: 'translateX('+(scrollLeft*-1)+'px)'}\">\n    <div class=\"ui-dg-expander\" if.bind=\"rowExpander\" css.bind=\"{width: expandWidth+'px',transform: 'translateX('+(scrollLeft)+'px)'}\"></div>\n    <div class=\"ui-dg-expander\" if.bind=\"rowCounter\" css.bind=\"{width: counterWidth+'px',transform: 'translateX('+(scrollLeft)+'px)'}\"></div>\n    <template repeat.for=\"col of colHead\">\n    <div if.bind=\"!col.columns\" css.bind=\"{width:col.getWidth(col.width)+'px', transform: 'translateX('+(col.locked==0?scrollLeft:0)+'px)'}\"\n      mouseup.trigger=\"doSort(col)\" class=\"ui-dg-cell ${col.sortable?'ui-sortable':''} ${col.locked==0?'ui-locked':''}\">\n    <span class=\"ui-title\" innerhtml.bind='col.getTitle()'></span>\n    <span class=\"ui-filter\" if.bind=\"col.filter\"><ui-glyph glyph=\"glyph-funnel\"></ui-glyph></span>\n    <span class=\"ui-sort ${col.dataId==store.sortBy ? store.orderBy:''}\" if.bind=\"col.sortable\"></span>\n    <span class=\"ui-resizer\" if.bind=\"col.resize\" mousedown.trigger=\"resizeColumn($event,col)\"></span>\n    </div>\n    <div if.bind=\"col.columns\" class=\"ui-dg-group ${col.locked==0?'ui-locked':''}\" css.bind=\"{transform: 'translateX('+(col.locked==0?scrollLeft:0)+'px)'}\">\n    <div class=\"ui-title\" innerhtml.bind='col.getTitle()'></div>\n    <div class=\"ui-dg-cols\">\n    <div repeat.for=\"colin of col.columns\" class=\"ui-dg-cell\" css.bind=\"{width:colin.getWidth(colin.width)+'px'}\"\n      mouseup.trigger=\"doSort(colin)\" class=\"${colin.sortable?'ui-sortable':''}\">\n    <span class=\"ui-title\" innerhtml.bind='colin.getTitle()'></span>\n    <span class=\"ui-filter\" if.bind=\"colin.filter\"><ui-glyph glyph=\"glyph-funnel\"></ui-glyph></span>\n    <span class=\"ui-sort ${colin.dataId==store.sortBy ? store.orderBy:''}\" if.bind=\"colin.sortable\"></span>\n    <span class=\"ui-resizer\" if.bind=\"colin.resize\" mousedown.trigger=\"resizeColumn($event,colin)\"></span>\n    </div>\n    </div>\n    </div>\n    </template>\n  </div>\n</div>\n<div show.bind=\"data.length==0\" class=\"ui-dg-empty\"><slot name=\"dg-empty\"></slot></div>\n<div ref=\"dgBody\" class=\"ui-dg-body\" scroll.trigger=\"(scrollLeft = dgBody.scrollLeft)\" if.bind=\"!virtual\">\n  <ui-dg-row containerless parent.bind=\"$parent\" record.bind=\"record\" index.bind=\"$index\" odd.bind=\"$odd\" repeat.for=\"record of store.data\"></ui-dg-row>\n  <div class=\"ui-dg-row ui-dg-filler\">\n    <div class=\"ui-dg-lock-holder\" css.bind=\"{transform: 'translateX('+scrollLeft+'px)'}\">\n      <div class=\"ui-dg-expander\" if.bind=\"rowExpander\" css.bind=\"{width: expandWidth+'px'}\"></div>\n      <div class=\"ui-dg-expander\" if.bind=\"rowCounter\" css.bind=\"{width: counterWidth+'px'}\"></div>\n      <div class=\"ui-dg-cell ${col.align}\" repeat.for=\"col of colLocked\" css.bind=\"{width:col.getWidth(col.width)+'px'}\"></div>\n    </div>\n    <div class=\"ui-dg-cell ${col.align}\" repeat.for=\"col of cols\" css.bind=\"{width:col.getWidth(col.width)+'px'}\"></div>\n  </div>\n</div>\n<div ref=\"dgBody\" class=\"ui-dg-body\" scroll.trigger=\"(scrollLeft = dgBody.scrollLeft)\" if.bind=\"virtual\">\n  <ui-dg-row if.bind=\"store\" parent.bind=\"$parent\" record.bind=\"record\" index.bind=\"$index\" odd.bind=\"$odd\" virtual-repeat.for=\"record of store.data\"></ui-dg-row>\n  <div class=\"ui-dg-row ui-dg-filler\">\n    <div class=\"ui-dg-lock-holder\" css.bind=\"{transform: 'translateX('+scrollLeft+'px)'}\">\n      <div class=\"ui-dg-expander\" if.bind=\"rowExpander\" css.bind=\"{width: expandWidth+'px'}\"></div>\n      <div class=\"ui-dg-expander\" if.bind=\"rowCounter\" css.bind=\"{width: counterWidth+'px'}\"></div>\n      <div class=\"ui-dg-cell ${col.align}\" repeat.for=\"col of colLocked\" css.bind=\"{width:col.getWidth(col.width)+'px'}\"></div>\n    </div>\n    <div class=\"ui-dg-cell ${col.align}\" repeat.for=\"col of cols\" css.bind=\"{width:col.getWidth(col.width)+'px'}\"></div>\n  </div>\n</div>\n<div ref=\"dgFoot\" class=\"ui-dg-footer\">\n  <div class=\"ui-dg-row\" css.bind=\"{transform: 'translateX('+(scrollLeft*-1)+'px)'}\">\n    <div class=\"ui-dg-lock-holder\" css.bind=\"{transform: 'translateX('+scrollLeft+'px)'}\">\n      <div class=\"ui-dg-expander\" if.bind=\"rowExpander\" css.bind=\"{width: expandWidth+'px'}\"></div>\n      <div class=\"ui-dg-expander\" if.bind=\"rowCounter\" css.bind=\"{width: counterWidth+'px'}\"></div>\n      <div class=\"ui-dg-cell ${col.align}\" repeat.for=\"col of colLocked\" css.bind=\"{width:col.getWidth(col.width)+'px'}\">\n        <div innerhtml.bind='col.getSummary(summaryRow, store.getSummary(col.dataId, col.summary), store.data)'></div>\n      </div>\n    </div>\n    <div class=\"ui-dg-cell ${col.align}\" repeat.for=\"col of cols\" css.bind=\"{width:col.getWidth(col.width)+'px'}\">\n      <div innerhtml.bind='col.getSummary(summaryRow, store.getSummary(col.dataId, col.summary), store.data)'></div>${recalc}\n    </div>\n  </div>\n</div>\n<div class=\"ui-dg-loader\" if.bind=\"store.isLoading\">\n  <div class=\"ui-loader-div\">\n    <ui-glyph class=\"ui-anim-loader\" glyph=\"glyph-loader\"></ui-glyph>\n  </div>\n</div><template>"),
    aurelia_framework_1.customElement('ui-datagrid'),
    __metadata("design:paramtypes", [Element, aurelia_validation_1.ValidationControllerFactory])
], UIDatagrid);
exports.UIDatagrid = UIDatagrid;
var UIDGEmpty = (function () {
    function UIDGEmpty() {
    }
    return UIDGEmpty;
}());
UIDGEmpty = __decorate([
    aurelia_framework_1.containerless(),
    aurelia_framework_1.customElement('ui-dg-empty'),
    aurelia_framework_1.inlineView("<template><div slot=\"dg-empty\"><slot></slot></div></template>")
], UIDGEmpty);
exports.UIDGEmpty = UIDGEmpty;
var UIPager = (function () {
    function UIPager(element) {
        this.element = element;
        this.page = 0;
        this.style = "chevron";
        this.totalPages = 1;
    }
    UIPager.prototype.bind = function (bindingContext, overrideContext) {
        if (this.store)
            this.store.paged = true;
    };
    UIPager.prototype.attached = function () {
    };
    UIPager.prototype.fireChange = function () {
        if (this.store)
            this.store.loadPage(this.page);
        ui_event_1.UIEvent.fireEvent('change', this.element, this.page);
    };
    return UIPager;
}());
__decorate([
    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
    __metadata("design:type", Object)
], UIPager.prototype, "page", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIPager.prototype, "store", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIPager.prototype, "style", void 0);
__decorate([
    aurelia_framework_1.bindable(),
    __metadata("design:type", Object)
], UIPager.prototype, "totalPages", void 0);
UIPager = __decorate([
    aurelia_framework_1.autoinject(),
    aurelia_framework_1.inlineView("<template class=\"ui-pager\">\n  <a class=\"pg-first ${page==0?'disabled':''}\" click.trigger=\"fireChange(page=0)\"><ui-glyph glyph=\"glyph-${style}-double-left\"></ui-glyph></a>\n  <a class=\"pg-prev ${page==0?'disabled':''}\" click.trigger=\"fireChange(page=page-1)\"><ui-glyph glyph=\"glyph-${style}-left\"></ui-glyph></a>\n  <span class=\"pg-input\">${page+1} of ${(store.totalPages||totalPages)}</span>\n  <a class=\"pg-next ${page+1>=(store.totalPages||totalPages)?'disabled':''}\" click.trigger=\"fireChange(page=page+1)\"><ui-glyph glyph=\"glyph-${style}-right\"></ui-glyph></a>\n  <a class=\"pg-last ${page+1>=(store.totalPages||totalPages)?'disabled':''}\" click.trigger=\"fireChange(page=(store.totalPages||totalPages)-1)\"><ui-glyph glyph=\"glyph-${style}-double-right\"></ui-glyph></a>\n</template>"),
    aurelia_framework_1.customElement('ui-pager'),
    __metadata("design:paramtypes", [Element])
], UIPager);
exports.UIPager = UIPager;
var UIDGFilter = (function () {
    function UIDGFilter(element) {
        this.element = element;
    }
    return UIDGFilter;
}());
UIDGFilter = __decorate([
    aurelia_framework_1.autoinject(),
    aurelia_framework_1.inlineView("<template class=\"ui-filter\"></template>"),
    aurelia_framework_1.customElement('ui-dg-filter'),
    __metadata("design:paramtypes", [Element])
], UIDGFilter);
exports.UIDGFilter = UIDGFilter;
