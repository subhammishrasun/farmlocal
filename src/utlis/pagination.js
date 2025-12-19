exports.buildCursorQuery = (cursor) => {
if (!cursor) return {};
return { _id: { $gt: cursor } };
};