// import cloudinary from '../config/cloudinary';
import PadimiServices from "../services/padimi.services";

class PadimiController {
  static async getPadiLite(req, res) {
    try {
      const getPadiLiteItems = await PadimiServices.getPadiLiteItems();
      return res.status(200).json({
        status: 200,
        data: getPadiLiteItems
      });
    } catch (error) {
      return res.status(404).json({
        status: 404,
        error: error.message
      });
    }
  }

  static async getPadiStart(req, res) {
    try {
      const PadiStartItems = await PadimiServices.PadiStartItems();
      return res.status(200).json({
        status: 200,
        data: PadiStartItems
      });
    } catch (error) {
      return res.status(404).json({
        status: 404,
        error: error.message
      });
    }
  }

  static async getPadiConnect(req, res) {
    try {
      const getPadiConnectItems = await PadimiServices.getPadiConnectItems();
      return res.status(200).json({
        status: 200,
        data: getPadiConnectItems
      });
    } catch (error) {
      return res.status(404).json({
        status: 404,
        error: error.message
      });
    }
  }

  static async getPadiPremium(req, res) {
    try {
      const getPadiPremiumItems = await PadimiServices.getPadiPremiumItems();
      return res.status(200).json({
        status: 200,
        data: getPadiPremiumItems
      });
    } catch (error) {
      return res.status(404).json({
        status: 404,
        error: error.message
      });
    }
  }
}
export default PadimiController;
