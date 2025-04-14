import { isCI } from "ci-info";
declare const isNotCI: boolean = !isCI;
export = isNotCI;
