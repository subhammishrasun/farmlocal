const { fetchExternalA } = require('../services/externalA.services');

exports.fetchExternal = async (req, res) => {
  try {
    const { data } = await fetchExternalA();
    res.json(data);
  } catch (err) {
    console.error('External API failed:', err.message);

    res.status(200).json({
      message: 'External service unavailable, fallback response',
      data: []
    });
  }
};
