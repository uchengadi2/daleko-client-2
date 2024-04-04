import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonArrow from "./../ui/ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Snackbar from "@material-ui/core/Snackbar";
import ReactPlayer from "react-player";
import CircularProgress from "@material-ui/core/CircularProgress";

import CallToAction from "./../ui/CallToAction";

import revolutionBackground from "./../../assets/repeatingBackground.svg";
import infoBackground from "./../../assets/infoBackground.svg";
import ProductCard from "./../ProductCard";
import background from "./../../logistic_assets/cover_image_1.png";
import { Category } from "@material-ui/icons";
import history from "../../history";
import AboutUsFormContainer from "./../aboutus/AboutUsFormContainer";
import ContactUsContainerForm from "./../contactus/ContactUsContainerForm";
import BecomePartnerFormContainer from "./../partner/BecomePartnerFormContainer";
import CategoryProductsCard from "../CategoryProductsCard";
import ProductDetailCard from "./ProductDetailCard";
import UpperFooter from "../ui/UpperFooter";
import SendCourseToCheckoutForm from "./SendCourseToCheckoutForm";

import { baseURL } from "./../../apis/util";
import api from "./../../apis/local";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
    // height: "100%",
    position: "relative",
    "& video": {
      objectFit: "cover",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "99rem",
    height: "42rem",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  animation: {
    // maxWidth: "100em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  footer: {
    width: "100%",
    marginTop: "10rem",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 155,
    marginRight: 40,
    fontWeight: 400,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "2.9em",
    marginLeft: "5.5em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 45,
    width: 145,
  },
  visitPartnerButtonsite: {
    ...theme.typography.partnerButton,
    fontSize: "0.9rem",
    height: 45,
    width: 200,
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    border: `2px solid ${theme.palette.common.blue}`,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    marginLeft: "2px",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },

  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      // backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
}));

function ProductDetails(props) {
  const params = useParams();
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [contactUsOpen, setContactUsOpen] = useState(false);
  const [becomePartnerOpen, setBecomePartnerOpen] = useState(false);
  const [product, setProduct] = useState({});
  const [isOnPromo, setIsOnPromo] = useState(false);
  const [promoPrice, setPromoPrice] = useState();
  const [promoMinQuantity, setPromoMinQuantity] = useState();
  const [course, setCourse] = useState({});
  const [isLoading, setIsLoading] = useState(null);
  const [policy, setPolicy] = useState();

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const defaultOptions = {
    loop: true,
    autoplay: false,
    // animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidyMid slice",
    },
  };

  const categorySlug = params.catSlug;
  const slug = params.slug;

  const handleBecomeAPartnerOpenDialogBox = () => {
    setBecomePartnerOpen(false);
  };

  const handleSuccessfulBecomeAPartnerOpenDialogBoxWithSnackbar = () => {
    setBecomePartnerOpen(false);
    setAlert({
      open: true,
      message: "Application successfully submitted",
      backgroundColor: "#4BB543",
    });
  };

  const handleFailedBecomeAPartnerOpenDialogBoxWithSnackbar = () => {
    setAlert({
      open: true,
      message: "Something went wrong somewhere",
      backgroundColor: "#FF3232",
    });
    setBecomePartnerOpen(true);
  };

  //confirm if product is on promp
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let allData = [];
  //     api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
  //     const response = await api.get(`/productsonsale`, {
  //       params: {
  //         course: courseId,
  //         //status: "active",
  //       },
  //     });
  //     const item = response.data.data.data;

  //     allData.push({
  //       id: item[0].id,
  //       price: item[0].salesPricePerUnit,
  //       minQuantity: item[0].minimumQuantity,
  //     });

  //     if (!allData) {
  //       return;
  //     }

  //     setPromoPrice(allData[0].price);
  //     setIsOnPromo(true);
  //     setPromoMinQuantity(allData[0].minQuantity);
  //   };

  //   //call the function

  //   fetchData().catch(console.error);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/products`, {
        params: { slug: slug },
      });
      const product = response.data.data.data;

      if (product.length >= 1) {
        allData.push({
          id: product[0]._id,
          name: product[0].name,
          imageCover: product[0].imageCover,
          mainImage: product[0].mainImage,
          images: product[0].images,
          shortDescription: product[0].shortDescription,
          fullDescription: product[0].fullDescription,
          pricePerUnit: product[0].pricePerUnit,
          category: product[0].category,
          currency: product[0].currency,
          minimumQuantity: product[0].minimumQuantity,
          sku: product[0].sku,
          unit: product[0].unit,
          isFeaturedProduct: product[0].isFeaturedProduct,
          configuration: product[0].configuration,
          displayOnStore: product[0].displayOnStore,
          salesPreference: product[0].salesPreference,
          keyword1: product[0].keyword1,
          keyword2: product[0].keyword2,
          keyword3: product[0].keyword3,
          slug: product[0].slug,
          allowSubscription: product[0].allowSubscription,
          //video: product[0].video,
          createBy: product[0].createBy,
          pricingMechanism: product[0].pricingMechanism,
          weightPerUnit: product[0].weightPerUnit,
          isVatable: product[0].isVatable,
          priceLabel: product[0].priceLabel,
          stockStatus: product[0].stockStatus,
          brand: product[0].brand,
          marketPricingCondition: product[0].marketPricingCondition,
          hasVariant: product[0].hasVariant,
          barcode: product[0].barcode,
          deliverability: product[0].deliverability,
          pickupInfo: product[0].pickupInfo,
          allowPriceFreezing: product[0].allowPriceFreezing,
          allowFreezedPriceLowBound: product[0].allowFreezedPriceLowBound,
          freezedPriceLowBound: product[0].freezedPriceLowBound,
          chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound:
            product[0].chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound,
          chargesPerWeekOnFreezedPriceServiceWithPriceLowBound:
            product[0].chargesPerWeekOnFreezedPriceServiceWithPriceLowBound,
          freezedPriceMaximumDurationInWeeks:
            product[0].freezedPriceMaximumDurationInWeeks,
          minimumFreezableQuantity: product[0].minimumFreezableQuantity,
          datePriceWasSet: product[0].datePriceWasSet,
          requiredMaximumNumberOfCommunityMembers:
            product[0].requiredMaximumNumberOfCommunityMembers,
          communityTotalPurchaseableUnit:
            product[0].communityTotalPurchaseableUnit,
          communityDeliveryPeriod: product[0].communityDeliveryPeriod,
          communityDeliveryType: product[0].communityDeliveryType,
          communityInstruction: product[0].communityInstruction,
          dealCode: product[0].dealCode,
          dealExpiryDate: product[0].dealExpiryDate,
        });

        setProduct({
          id: allData[0].id,
          name: allData[0].name,
          image: allData[0].imageCover,
          mainImage: allData[0].image,
          images: allData[0].images,
          shortDescription: allData[0].shortDescription,
          fullDescription: allData[0].fullDescription,
          pricePerUnit: allData[0].pricePerUnit,
          category: allData[0].category,
          minimumQuantity: allData[0].minimumQuantity,
          currency: allData[0].currency,
          unit: allData[0].unit,
          sku: allData[0].sku,
          isFeaturedProduct: allData[0].isFeaturedProduct,
          configuration: allData[0].configuration,
          displayOnStore: allData[0].displayOnStore,
          brand: allData[0].brand,
          salesPreference: allData[0].salesPreference,
          keyword1: allData[0].keyword1,
          keyword2: allData[0].keyword2,
          keyword3: allData[0].keyword3,
          slug: allData[0].slug,
          allowSubscription: allData[0].allowSubscription,
          //video: allData[0].video,
          createBy: allData[0].createBy,
          pricingMechanism: allData[0].pricingMechanism,
          weightPerUnit: allData[0].weightPerUnit,
          isVatable: allData[0].isVatable,
          priceLabel: allData[0].priceLabel,
          stockStatus: allData[0].stockStatus,
          marketPricingCondition: allData[0].marketPricingCondition,
          hasVariant: allData[0].hasVariant,
          barcode: allData[0].barcode,
          deliverability: allData[0].deliverability,
          pickupInfo: allData[0].pickupInfo,
          allowPriceFreezing: allData[0].allowPriceFreezing,
          allowFreezedPriceLowBound: allData[0].allowFreezedPriceLowBound,
          freezedPriceLowBound: allData[0].freezedPriceLowBound,
          chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound:
            allData[0].chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound,
          chargesPerWeekOnFreezedPriceServiceWithPriceLowBound:
            allData[0].chargesPerWeekOnFreezedPriceServiceWithPriceLowBound,
          freezedPriceMaximumDurationInWeeks:
            allData[0].freezedPriceMaximumDurationInWeeks,
          minimumFreezableQuantity: allData[0].minimumFreezableQuantity,
          datePriceWasSet: allData[0].datePriceWasSet,
          requiredMaximumNumberOfCommunityMembers:
            allData[0].requiredMaximumNumberOfCommunityMembers,
          communityTotalPurchaseableUnit:
            allData[0].communityTotalPurchaseableUnit,
          communityDeliveryPeriod: allData[0].communityDeliveryPeriod,
          communityDeliveryType: allData[0].communityDeliveryType,
          communityInstruction: allData[0].communityInstruction,
          dealCode: allData[0].dealCode,
          dealExpiryDate: allData[0].dealExpiryDate,
        });

        setIsLoading(false);
      }
    };

    //call the function

    fetchData().catch(console.error);
  }, [slug]);

  const Str = require("@supercharge/strings");

  const productData = matchesMD ? (
    <React.Fragment>
      {
        <Grid container direction="row">
          <ProductDetailCard
            product={product}
            // isOnPromo={isOnPromo}
            // promoPrice={promoPrice}
            // promoMinQuantity={promoMinQuantity}

            features={product.features}
            shortDescription={product.shortDescription}
            fullDescription={product.fullDescription}
            totalUnits={product.totalUnits}
            pricePerUnit={product.pricePerUnit}
            currency={product.currency}
            category={product.category}
            categorySlug={categorySlug}
            slug={slug}
            brand={product.brand}
            //slug={product.slug}
            salesPreference={product.salesPreference}
            displayOnStore={product.displayOnStore}
            image={product.image}
            images={product.images}
            pricingMechanism={product.pricingMechanism}
            weightPerUnit={product.weightPerUnit}
            isVatable={product.isVatable}
            priceLabel={product.priceLabel}
            stockStatus={product.stockStatus}
            marketPricingCondition={product.marketPricingCondition}
            hasVariant={product.hasVariant}
            barcode={product.barcode}
            deliverability={product.deliverability}
            pickupInfo={product.pickupInfo}
            allowPriceFreezing={product.allowPriceFreezing}
            allowFreezedPriceLowBound={product.allowFreezedPriceLowBound}
            freezedPriceLowBound={product.freezedPriceLowBound}
            chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound={
              product.chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound
            }
            chargesPerWeekOnFreezedPriceServiceWithPriceLowBound={
              product.chargesPerWeekOnFreezedPriceServiceWithPriceLowBound
            }
            freezedPriceMaximumDurationInWeeks={
              product.freezedPriceMaximumDurationInWeeks
            }
            minimumFreezableQuantity={product.minimumFreezableQuantity}
            datePriceWasSet={product.datePriceWasSet}
            requiredMaximumNumberOfCommunityMembers={
              product.requiredMaximumNumberOfCommunityMembers
            }
            communityTotalPurchaseableUnit={
              product.communityTotalPurchaseableUnit
            }
            communityDeliveryPeriod={product.communityDeliveryPeriod}
            communityDeliveryType={product.communityDeliveryType}
            communityInstruction={product.communityInstruction}
            dealCode={product.dealCode}
            dealExpiryDate={product.dealExpiryDate}
            key={product.id}
            token={props.token}
            userId={props.userId}
            setToken={props.setToken}
            setUserId={props.setUserId}
            handleSuccessfulCreateSnackbar={
              props.handleSuccessfulCreateSnackbar
            }
            handleFailedSnackbar={props.handleFailedSnackbar}
            cartCounterHandler={props.cartCounterHandler}
          />
        </Grid>
      }
    </React.Fragment>
  ) : (
    <React.Fragment>
      {
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <ProductDetailCard
            product={product}
            // isOnPromo={isOnPromo}
            // promoPrice={promoPrice}
            // promoMinQuantity={promoMinQuantity}

            features={product.features}
            shortDescription={product.shortDescription}
            fullDescription={product.fullDescription}
            totalUnits={product.totalUnits}
            pricePerUnit={product.pricePerUnit}
            currency={product.currency}
            category={product.category}
            categorySlug={categorySlug}
            slug={slug}
            brand={product.brand}
            //slug={product.slug}
            salesPreference={product.salesPreference}
            displayOnStore={product.displayOnStore}
            image={product.image}
            images={product.images}
            pricingMechanism={product.pricingMechanism}
            weightPerUnit={product.weightPerUnit}
            isVatable={product.isVatable}
            priceLabel={product.priceLabel}
            stockStatus={product.stockStatus}
            marketPricingCondition={product.marketPricingCondition}
            hasVariant={product.hasVariant}
            barcode={product.barcode}
            deliverability={product.deliverability}
            pickupInfo={product.pickupInfo}
            allowPriceFreezing={product.allowPriceFreezing}
            allowFreezedPriceLowBound={product.allowFreezedPriceLowBound}
            freezedPriceLowBound={product.freezedPriceLowBound}
            chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound={
              product.chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound
            }
            chargesPerWeekOnFreezedPriceServiceWithPriceLowBound={
              product.chargesPerWeekOnFreezedPriceServiceWithPriceLowBound
            }
            freezedPriceMaximumDurationInWeeks={
              product.freezedPriceMaximumDurationInWeeks
            }
            minimumFreezableQuantity={product.minimumFreezableQuantity}
            datePriceWasSet={product.datePriceWasSet}
            requiredMaximumNumberOfCommunityMembers={
              product.requiredMaximumNumberOfCommunityMembers
            }
            communityTotalPurchaseableUnit={
              product.communityTotalPurchaseableUnit
            }
            communityDeliveryPeriod={product.communityDeliveryPeriod}
            communityDeliveryType={product.communityDeliveryType}
            communityInstruction={product.communityInstruction}
            dealCode={product.dealCode}
            dealExpiryDate={product.dealExpiryDate}
            key={product.id}
            token={props.token}
            userId={props.userId}
            setToken={props.setToken}
            setUserId={props.setUserId}
            handleSuccessfulCreateSnackbar={
              props.handleSuccessfulCreateSnackbar
            }
            handleFailedSnackbar={props.handleFailedSnackbar}
            cartCounterHandler={props.cartCounterHandler}
          />
        </Grid>
      }
    </React.Fragment>
  );

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item style={{ marginTop: "10px" }}>
        {isLoading && (
          <CircularProgress
            size={100}
            color="inherit"
            style={{ marginTop: 250, marginLeft: 650 }}
          />
        )}

        {!isLoading && <Grid item>{productData}</Grid>}

        {/*....INFORMATION BLOCK....*/}
      </Grid>
      <Grid item className={classes.footer}>
        <UpperFooter />
      </Grid>
    </Grid>
  );
}

export default ProductDetails;
