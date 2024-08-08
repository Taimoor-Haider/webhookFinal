import express from "express";
import {
  searchMessagesByMessage,
  searchMessagesByAuthorName,
  getAllWebhooks,
  testWebhook,
  addMessageWebhook
} from "../controller/messageController.js";
const router = express.Router();

// Route to search for messages
router.get("/search/messages", searchMessagesByAuthorName);
router.post("/send-message",addMessageWebhook);
// Route to get all webhooks
router.get("/messages", getAllWebhooks);
// Route to get all webhooks By Message
router.get("/search", searchMessagesByMessage);
// Testing webhook
router.post("/test-webhook", testWebhook);
export default router;
