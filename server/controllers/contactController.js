import ContactMessage from "../models/ContactMessage.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const contactMessage = await ContactMessage.create({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    console.log("New contact message:", contactMessage._id);

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully.",
      data: {
        id: contactMessage._id,
      },
    });
  } catch (error) {
    console.error("CONTACT CONTROLLER ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send your message.",
    });
  }
};