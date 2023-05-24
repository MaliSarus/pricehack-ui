import { InjectionKey, WritableComputedRef } from "vue";

export const closableTagGroupKey = Symbol() as InjectionKey<
  WritableComputedRef<(string | number)[]>
>;
