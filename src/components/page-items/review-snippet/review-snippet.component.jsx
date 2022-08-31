import {
  ReviewContainer,
  HomeReviewImgContainer,
  HomeReviewImg,
  HomeReviewImgSubTxt,
  HomeReviewTextContainer,
  HomeReviewQuotations,
  HomeReviewText,
} from "./review-snippet.styles";

const ReviewSnippet = (props) => {
  return (
    <ReviewContainer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <HomeReviewImgContainer>
        <HomeReviewImg src={props.img} />
        <HomeReviewImgSubTxt>
          {props.name}
          <br />
          {props.biz}
        </HomeReviewImgSubTxt>
      </HomeReviewImgContainer>
      <HomeReviewTextContainer>
        <HomeReviewQuotations textalign="left">
          &#8216;&#8216;
        </HomeReviewQuotations>
        <HomeReviewText>{props.review}</HomeReviewText>
        <HomeReviewQuotations textalign="right">
          &#8217;&#8217;
        </HomeReviewQuotations>
      </HomeReviewTextContainer>
    </ReviewContainer>
  );
};

export default ReviewSnippet;
