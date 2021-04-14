import { AWS_ASSOCIATE_ID } from "./constants"

export default function getAmazonAffiliateLink(ASIN) {
  return `https://www.amazon.com/gp/product/${ASIN}/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=${ASIN}&linkCode=as2&tag=${AWS_ASSOCIATE_ID}`
}
