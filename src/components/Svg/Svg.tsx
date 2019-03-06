import React, { PureComponent, RefObject } from 'react';
import SVG from 'svg.js';

export default class Editor extends PureComponent<{}> {
    public svgEl: RefObject<HTMLDivElement>;

    public constructor(props: {}) {
        super(props);
        this.svgEl = React.createRef();
    }

    public componentDidMount(): void {
        if (this.svgEl.current) {
            let draw = SVG(this.svgEl.current).size(300, 300);
            draw.rect(100, 100).attr({ fill: '#f06' });
        }
    }

    public render(): JSX.Element {
        return <div ref={this.svgEl}>{this.props.children}</div>;
    }
}
