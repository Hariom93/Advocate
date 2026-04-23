import Contact from '../models/Contact.js';

export const submitContactForm = async (req, res) => {
  try {
    const newContact = await Contact.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    res.status(201).json({
      status: 'success',
      message: 'Your message has been sent successfully!',
      data: {
        contact: newContact,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
