import { AppState } from 'store';
import {} from 'store/nodes/types';

interface MapNodes {
    [index: number]: Node;
}

export default function getMapNodes(
    rootNodeId: string,
    state: AppState
): MapNodes[] {
    return [];
}
