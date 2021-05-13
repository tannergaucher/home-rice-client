const AWS_ASSOCIATE_ID = `homerice-20`
const YT_DESCRIPTIONS_DIRNAME = "_yt-descriptions"

const pages = [
  {
    name: `Posts`,
    location: `/`,
  },
  {
    name: `Categories`,
    location: `/categories`,
  },
  {
    name: `Ingredients`,
    location: `/ingredients`,
  },
  {
    name: `Gear`,
    location: `/gear`,
  },
]

module.exports = {
  AWS_ASSOCIATE_ID,
  YT_DESCRIPTIONS_DIRNAME,
  pages,
}
