import {twMerge} from "tailwind-merge";
import {clsx} from "clsx";

export const cn = (...inputs) => {  // clsx cleanups  and combines the classes
    return twMerge(clsx(inputs)) // twMerge merges the classes
}