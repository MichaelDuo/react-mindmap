type getNodesFuncType = () => void;

export default class Manager {
    private getNodesFunc: (getNodesFuncType) | null = null;

    public setGetNodes(getNodesFunc: getNodesFuncType) {
        this.getNodesFunc = getNodesFunc;
    }

    public async getNodes() {
        if (this.getNodesFunc) {
            return await this.getNodesFunc();
        } else {
            throw new Error(
                'can not get nodes because getNodesFunc is not found, please set the function during initialization'
            );
        }
    }
}
