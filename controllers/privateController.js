const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const { PrismaClient } = require("../generated/client");
const prisma = new PrismaClient();

// Handle Post create on POST.
exports.create = asyncHandler(async (req, res, next) => {
  const message = await prisma.message.create({
    data: {
      sender: { connect: { id: req.user.id } },
      receiver: { connect: { id: +req.params.rxId } },
      content: req.body.content,
    },
  });
  return res.send(message);
});

exports.list = asyncHandler(async (req, res, next) => {
  const messages = await prisma.message.findMany({
    orderBy: {
      timeSent: "desc",
    },
    where: {
      OR: [
        { senderId: req.user.id, receiverId: +req.params.userId },
        { receiverId: req.user.id, senderId: +req.params.userId },
      ],
    },
    select: {
      content: true,
      receiverId: true,
      senderId: true,
    },
  });
  return res.send(messages);
});

exports.userList = asyncHandler(async (req, res, next) => {
  const users = await prisma.usuari.findMany({
    where: {
      id: { not: req.user.id },
    },
  });
  return res.send(users);
});
