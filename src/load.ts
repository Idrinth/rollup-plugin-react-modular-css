export default (hash: string, name: string) => {
    const global = window || this || {};
    const header = global.document.getElementsByTagName('head')[0];
    // @ts-ignore
    const prefix= import.meta.env.BASE_URL ?? '';
    const path = `${prefix}/assets/${name}-${hash}.min.css`;
    if (global.document.querySelector(`link[href='${ path }']`)) {
        return;
    }
    const style= global.document.createElement('link');
    style.setAttribute('rel','stylesheet');
    style.setAttribute('href', path);
    header.appendChild(style);
}