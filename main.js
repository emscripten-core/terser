import "./lib/transform.js";
import "./lib/mozilla-ast.js";
// import { minify } from "./lib/minify.js";

// export { minify } from "./lib/minify.js";
import "./lib/output.js";
import "./lib/scope.js";

// export { run_cli as _run_cli } from "./lib/cli.js";
export { AST_Node, AST_Token } from "./lib/ast.js";

/*
export async function _default_options() {
    const defs = {};

    Object.keys(infer_options({ 0: 0 })).forEach((component) => {
        const options = infer_options({
            [component]: {0: 0}
        });

        if (options) defs[component] = options;
    });
    return defs;
}

async function infer_options(options) {
    try {
        await minify("", options);
    } catch (error) {
        return error.defs;
    }
}
*/
