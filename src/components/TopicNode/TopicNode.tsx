import React, { PureComponent } from 'react';
import { TopicNode as ITopicNode } from 'store/nodes/types';
import registry from 'utils/componentsRegistry';
export interface OwnProps {
    id: string;
}

export interface StateProps {
    node: ITopicNode;
}

export interface DispatchProps {
    addChildNode: (payload: { id: string }) => any;
    addSiblingNode: (payload: { id: string }) => any;
    deleteNode: (payload: { id: string }) => any;
}

type Props = OwnProps & StateProps & DispatchProps;

export default class TopicNode extends PureComponent<Props> {
    private getChildren() {
        const TopicNodeContainer = registry['TopicNode'];
        if (this.props.node.properties.children.length) {
            return this.props.node.properties.children.map(nodeId => {
                // console.log('trying to get id: ', nodeId);
                return <TopicNodeContainer id={nodeId} key={nodeId} />;
            });
        }
    }

    private test: string = '';

    public render(): JSX.Element | null {
        const node = this.props.node;
        if (!node) {
            return null;
        }
        return (
            <div>
                <div>
                    {node.properties.title}{' '}
                    <button
                        onClick={() => {
                            this.props.addChildNode({ id: node.id });
                        }}
                    >
                        Add Children
                    </button>
                    <button
                        onClick={() => {
                            this.props.addSiblingNode({ id: node.id });
                        }}
                    >
                        Add Sibling
                    </button>
                    <button
                        onClick={() => {
                            this.props.deleteNode({ id: node.id });
                        }}
                    >
                        Delete
                    </button>
                </div>
                <div style={{ paddingLeft: '15px' }}>{this.getChildren()}</div>
            </div>
        );
    }
}
