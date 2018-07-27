export const getClasses = (id, selectionId, hoverId) => {
	return `hoverable ${id === hoverId ? 'hover' : ''} ${
		id === selectionId ? 'selected' : ''
	}`;
};
