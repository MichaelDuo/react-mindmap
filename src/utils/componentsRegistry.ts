const registry = {} as any;

export default registry;

export function register(name: string, component: any) {
    registry[name] = component;
}
