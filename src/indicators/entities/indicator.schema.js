"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indicator = void 0;
var department_entity_1 = require("dist/departments/entities/department.entity");
var typeorm_1 = require("typeorm");
var Indicator = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _department_decorators;
    var _department_initializers = [];
    var _goal_decorators;
    var _goal_initializers = [];
    var _from_date_decorators;
    var _from_date_initializers = [];
    var _to_date_decorators;
    var _to_date_initializers = [];
    var _subsets_indicators_decorators;
    var _subsets_indicators_initializers = [];
    return _a = /** @class */ (function () {
            function Indicator() {
                this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.department = __runInitializers(this, _department_initializers, void 0);
                this.goal = __runInitializers(this, _goal_initializers, void 0);
                this.from_date = __runInitializers(this, _from_date_initializers, void 0);
                this.to_date = __runInitializers(this, _to_date_initializers, void 0);
                this.subsets_indicators = __runInitializers(this, _subsets_indicators_initializers, void 0);
            }
            return Indicator;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, typeorm_1.ObjectIdColumn)('uuid')];
            _name_decorators = [(0, typeorm_1.Column)()];
            _department_decorators = [(0, typeorm_1.ManyToOne)(function () { return department_entity_1.Department; }, function (department) { return department._id; }), (0, typeorm_1.JoinColumn)({ name: 'id' })];
            _goal_decorators = [(0, typeorm_1.Column)()];
            _from_date_decorators = [(0, typeorm_1.Column)()];
            _to_date_decorators = [(0, typeorm_1.Column)()];
            _subsets_indicators_decorators = [(0, typeorm_1.Column)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _department_decorators, { kind: "field", name: "department", static: false, private: false, access: { has: function (obj) { return "department" in obj; }, get: function (obj) { return obj.department; }, set: function (obj, value) { obj.department = value; } }, metadata: _metadata }, _department_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _goal_decorators, { kind: "field", name: "goal", static: false, private: false, access: { has: function (obj) { return "goal" in obj; }, get: function (obj) { return obj.goal; }, set: function (obj, value) { obj.goal = value; } }, metadata: _metadata }, _goal_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _from_date_decorators, { kind: "field", name: "from_date", static: false, private: false, access: { has: function (obj) { return "from_date" in obj; }, get: function (obj) { return obj.from_date; }, set: function (obj, value) { obj.from_date = value; } }, metadata: _metadata }, _from_date_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _to_date_decorators, { kind: "field", name: "to_date", static: false, private: false, access: { has: function (obj) { return "to_date" in obj; }, get: function (obj) { return obj.to_date; }, set: function (obj, value) { obj.to_date = value; } }, metadata: _metadata }, _to_date_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _subsets_indicators_decorators, { kind: "field", name: "subsets_indicators", static: false, private: false, access: { has: function (obj) { return "subsets_indicators" in obj; }, get: function (obj) { return obj.subsets_indicators; }, set: function (obj, value) { obj.subsets_indicators = value; } }, metadata: _metadata }, _subsets_indicators_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.Indicator = Indicator;
