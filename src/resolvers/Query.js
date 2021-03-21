const feed = (parent, args, context, info) => context.prisma.link.findMany();

module.exports = {
  feed,
};
