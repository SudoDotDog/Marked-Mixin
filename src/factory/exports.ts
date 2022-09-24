/**
 * @author WMXPY
 * @namespace Factory
 * @description Exports
 */

import { ISandbox, MarkedMixin } from "@sudoo/marked";
import { wrapMarkedMixinFunction } from "../wrap";
import { IMarkedMixinFactory } from "./declare";

export class MarkedExportsMixinFactory implements IMarkedMixinFactory {

    public static fromExports(
        exports: Record<string, any>,
    ): MarkedExportsMixinFactory {

        return new MarkedExportsMixinFactory(exports);
    }

    private readonly _exports: Record<string, any>;

    private constructor(exports: Record<string, any>) {

        this._exports = exports;
    }

    public createInjectMixin(variableName: string): MarkedMixin {

        return (sandbox: ISandbox) => {

            sandbox.inject(
                variableName,
                this._polyfillExports(sandbox),
            );
            return;
        };
    }

    public createProvideMixin(moduleName: string): MarkedMixin {

        return (sandbox: ISandbox) => {

            sandbox.provide(
                moduleName,
                this._polyfillExports(sandbox),
            );
            return;
        };
    }

    private _polyfillExports(sandbox: ISandbox): Record<string, any> {

        const keys: string[] = Object.keys(this._exports);

        const polyfill: Record<string, any> = {};

        keys: for (const key of keys) {

            const value: any = this._exports[key];

            if (typeof value === 'function') {

                polyfill[key] = wrapMarkedMixinFunction(sandbox, value);
                continue keys;
            }

            polyfill[key] = value;
        }
        return polyfill;
    }
}
