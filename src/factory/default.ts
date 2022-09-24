/**
 * @author WMXPY
 * @namespace Factory
 * @description Default
 */

import { ISandbox, MarkedMixin } from "@sudoo/marked";
import { IMarkedMixinFactory } from "./declare";

export class MarkedDefaultMixinFactory implements IMarkedMixinFactory {

    public static fromObject(
        target: any,
    ): MarkedDefaultMixinFactory {

        return new MarkedDefaultMixinFactory(target);
    }

    private readonly _target: any;

    private constructor(target: any) {

        this._target = target;
    }

    public createInjectMixin(variableName: string): MarkedMixin {

        return (sandbox: ISandbox) => {

            sandbox.inject(
                variableName,
                this._target,
            );
            return;
        };
    }

    public createProvideMixin(moduleName: string): MarkedMixin {

        return (sandbox: ISandbox) => {

            sandbox.provide(
                moduleName,
                {
                    default: this._target,
                },
            );
            return;
        };
    }
}
