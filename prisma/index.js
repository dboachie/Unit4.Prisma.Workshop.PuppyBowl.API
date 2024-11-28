const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
module.exports = prisma;

const express = require("express");