import React, { PureComponent, RefObject } from 'react';
import SVG from 'svg.js';

export default class Editor extends PureComponent<{}> {
    public svgRef: RefObject<SVGSVGElement>;
    public svgDoc: SVG.Doc | null = null;

    public constructor(props: {}) {
        super(props);
        this.svgRef = React.createRef();
    }

    public componentDidMount(): void {
        const svgEl = (this.svgRef.current as unknown) as HTMLElement;
        if (svgEl) {
            this.svgDoc = SVG(svgEl).size('100%', '100%');
        }
    }

    public render(): JSX.Element {
        return (
            <svg id="svg" ref={this.svgRef}>
                {this.props.children}
            </svg>
        );
    }
}
