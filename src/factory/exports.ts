/**
 * @author WMXPY
 * @namespace Factory
 * @description Exports
 */

import { ISandbox, MarkedMixin } from "@sudoo/marked";

export class MarkedExportsMixinFactory {

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
                this._polyfillExports(sandbox.usingAdditionalArgument),
            );
            return;
        };
    }

    public createProvideMixin(moduleName: string): MarkedMixin {

        return (sandbox: ISandbox) => {

            sandbox.provide(
                moduleName,
                this._polyfillExports(sandbox.usingAdditionalArgument),
            );
            return;
        };
    }

    private _polyfillExports(additionalArgument: boolean): Record<string, any> {

        const keys: string[] = Object.keys(this._exports);

        const polyfill: Record<string, any> = {};

        for (const key of keys) {

            const value: any = this._exports[key];

            if (typeof value === 'function') {

                if (additionalArgument) {
                    polyfill[key] = (_additionalArgument: any, ...args: any[]) => {
                        return value(...args);
                    };
                }
            } else {

                polyfill[key] = value;
            }
        }
        return polyfill;
    }
}
