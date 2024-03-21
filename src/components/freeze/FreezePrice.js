import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Snackbar from "@material-ui/core/Snackbar";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Typography } from "@mui/material";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import ThankYou from "../thankyou/ThankYou";
import history from "../../history";
import api from "./../../apis/local";
import Paystack from "./Paystack";
import { CREATE_FREEZE } from "../../actions/types";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "6rem",
    marginLeft: "20%",
    marginRight: "15%",
    width: "100%",
  },
  formStyles: {
    width: 500,
    marginLeft: "25%",
  },
  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 150,
    marginLeft: 350,
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
  },
  firstSection: {
    width: 300,
  },
}));

const renderMultilineField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  helperText,
  id,
  rows,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      //placeholder="category description"
      variant="outlined"
      helperText={helperText}
      label={label}
      id={input.name}
      // value={formInput.description}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={rows}
      {...custom}
      onChange={input.onChange}
    />
  );
};

const renderCustomerNameField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  helperText,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText={helperText}
      variant="outlined"
      label={label}
      id={input.name}
      //value={formInput.name}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderFreezeDurationField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  helperText,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText={helperText}
      variant="outlined"
      label={label}
      id={input.name}
      //value={formInput.name}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderQuantityRequestedField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  helperText,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText={helperText}
      variant="outlined"
      label={label}
      id={input.name}
      //value={formInput.name}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const MAX_COUNT = 12;

function FreezePrice(props) {
  const classes = useStyles();
  const params = useParams();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState();

  const [image, setImage] = useState();
  const [cityList, setCityList] = useState([]);

  const [stateList, setStateList] = useState([]);
  const [countryList, setCountryList] = useState([]);

  const [deliveryPreference, setDeliveryPreference] = useState("pickup");
  const [loading, setLoading] = useState(false);
  const [addToWhatsappGroup, setAddToWhatsappGroup] = useState("no");
  const [addToEmailList, setAddToEmailList] = useState("no");
  const [freezePriceNumber, setFreezePriceNumber] = useState(
    "FREEZE-" + Math.floor(Math.random() * 10000000000000) + "-" + "DAL"
  );
  const [product, setProduct] = useState({});
  const [minimumFreezableQuantity, setMinimumFreezableQuantity] = useState();
  const [sku, setSku] = useState();
  const [configuration, setConfiguration] = useState();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [
    freezedPriceMaximumDurationInWeeks,
    setFreezedPriceMaximumDurationInWeeks,
  ] = useState(1);
  const [currency, setCurrency] = useState();
  const [currencyName, setCurrencyName] = useState();
  const [requestedFreezeQuantity, setRequestedFreezeQuantity] = useState();
  const [freezeDurationInWeek, SetFreezeDurationInWeek] = useState(1);
  const [serviceCharge, setServiceCharge] = useState(0);
  const [serviceCostPerWeek, setServiceCostPerWeek] = useState();
  const [customerEmail, setCustomerEmail] = useState();
  const [customerName, setCustomerName] = useState();
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState();
  const [makePayment, setMakePayment] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const dispatch = useDispatch();

  const slug = params.slug;

  useEffect(() => {
    if (!requestedFreezeQuantity) {
      return;
    }
    if (!freezeDurationInWeek) {
      return;
    }
    const sum =
      requestedFreezeQuantity * freezeDurationInWeek * serviceCostPerWeek;
    // setServiceCharge(sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"));
    setServiceCharge(sum);
  }, [requestedFreezeQuantity, freezeDurationInWeek]);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/currencies/${currency}`);
      const currencyType = response.data.data.data;
      allData.push({ id: currencyType._id, name: currencyType.name });
      setCurrencyName(allData[0].name.toLowerCase());
    };

    //call the function

    fetchData().catch(console.error);
  }, [currency]);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/users/${props.userId}`);
      const user = response.data.data.data;
      allData.push({
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phoneNumber,
      });
      setCustomerEmail(allData[0].email);
      setCustomerName(allData[0].name);
      setCustomerPhoneNumber(allData[0].phone);
    };

    //call the function

    fetchData().catch(console.error);
  }, [props]);

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
        });
        setProductName(allData[0].name);
        setMinimumFreezableQuantity(allData[0].minimumFreezableQuantity);
        setProductPrice(allData[0].pricePerUnit);
        setFreezedPriceMaximumDurationInWeeks(
          allData[0].freezedPriceMaximumDurationInWeeks
        );
        setSku(allData[0].sku);
        setConfiguration(allData[0].configuration);
        setCurrency(allData[0].currency);
        setServiceCostPerWeek(
          allData[0].chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound
        );
        setIsLoading(false);
      }
    };

    //call the function

    fetchData().catch(console.error);
  }, [slug]);

  const handleFreezedQuantityChange = (e) => {
    setRequestedFreezeQuantity(e.target.value);
  };

  const handleFreezeDurationChange = (e) => {
    SetFreezeDurationInWeek(e.target.value);
  };

  const handleSuccessfulCreateSnackbar = (message) => {
    //setBecomePartnerOpen(false);
    setAlert({
      open: true,
      message: message,
      //backgroundColor: "#4BB543",
      backgroundColor: "#FF731D",
    });
  };

  const handleFailedSnackbar = (message) => {
    setAlert({
      open: true,
      message: message,
      backgroundColor: "#FF3232",
    });
    //setBecomePartnerOpen(true);
  };

  const renderSkuField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    helperText,
    defaultValue,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText={helperText}
        variant="outlined"
        label={label}
        id={input.name}
        defaultValue={defaultValue}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}
        //onChange={input.onChange}
        inputProps={{
          style: {
            height: 1,
          },
          readOnly: true,
        }}
      />
    );
  };

  const renderProductNameField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    helperText,
    defaultValue,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText={helperText}
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        defaultValue={defaultValue}
        {...custom}
        //onChange={input.onChange}
        inputProps={{
          style: {
            height: 1,
          },
          readOnly: true,
        }}

        //onChange={handleInput}
      />
    );
  };

  const renderServiceChargeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    helperText,
    defaultValue,
    id,
    ...custom
  }) => {
    return (
      <TextField
        error={touched && invalid}
        //placeholder="category description"
        variant="outlined"
        helperText={helperText}
        label={label}
        id={input.name}
        name={input.name}
        value={serviceCharge}
        //defaultValue={total}
        fullWidth
        type={type}
        //style={{ marginTop: 10, width: 250 }}
        onChange={input.onChange}
        InputProps={{
          inputProps: {
            min: 1,
            style: {
              height: 1,
              //fontSize: "2em",
            },
            readOnly: true,
          },
        }}
      />
    );
  };

  const renderProductPriceField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    helperText,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText={helperText}
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}
        //onChange={input.onChange}
        inputProps={{
          style: {
            height: 1,
          },
          readOnly: true,
        }}
      />
    );
  };

  const renderMinimumFreezableQuantityField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    helperText,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText={helperText}
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}
        //onChange={input.onChange}
        inputProps={{
          style: {
            height: 1,
          },
          readOnly: true,
        }}
      />
    );
  };

  const renderFreezedPriceMaximumDurationInWeeksField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    helperText,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText={helperText}
        variant="outlined"
        label={label}
        id={input.name}
        //value={formInput.name}
        fullWidth
        //required
        type={type}
        {...custom}
        //onChange={input.onChange}
        inputProps={{
          style: {
            height: 1,
          },
          readOnly: true,
        }}
      />
    );
  };

  const amountForPayment = +serviceCharge.toFixed(2) * 100;

  const buttonContent = () => {
    return <React.Fragment>Freeze Price</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    if (!requestedFreezeQuantity) {
      handleFailedSnackbar(
        "Please Enter The Quantity Of This Product You Need To Freeze The Price"
      );
      setLoading(false);
      return;
    }

    if (!freezeDurationInWeek) {
      handleFailedSnackbar(
        "Please Enter The Duration You Need To Freeze The Price Of This Product"
      );
      setLoading(false);
      return;
    }

    if (
      requestedFreezeQuantity < minimumFreezableQuantity ||
      requestedFreezeQuantity < 1
    ) {
      handleFailedSnackbar(
        "The Quantity To Be Freezed Should Not Be Lower Than The Minimum Freezeable Quantity Of This Product"
      );
      setLoading(false);
      return;
    }

    if (
      freezeDurationInWeek > freezedPriceMaximumDurationInWeeks ||
      freezeDurationInWeek < 1
    ) {
      handleFailedSnackbar(
        "The Freezed Duration Should Not Be Greater Than the Freezed Maximum Duration Of This Product"
      );

      setLoading(false);
      return;
    }

    setMakePayment(true);

    setLoading(false);

    return;
  };

  const getCurrencyCode = () => {
    if (currencyName) {
      if (currencyName.toLowerCase() === "naira") {
        return <span>&#8358;</span>;
      } else {
        return;
      }
    }
  };

  const renderOnlinePayment = (
    email,
    amount,
    freezePriceNumber,
    phoneNumber,
    name
  ) => {
    const data = {
      orderNumber: freezePriceNumber,
      name: name,
      phoneNumber: phoneNumber,
    };
    return (
      <Paystack
        email={email}
        amount={parseInt(amount)}
        text={"Make Payment To Secure the Freeze"}
        orderNumber={freezePriceNumber}
        data={data}
        token={props.token}
        handleSuccessfulCreateSnackbar={handleSuccessfulCreateSnackbar}
        handleFailedSnackbar={handleFailedSnackbar}
      />
    );
  };

  return (
    <div>
      <form id="freezePriceform" className={classes.root}>
        <Grid
          item
          container
          style={{ marginTop: 0 }}
          //justifyContent="center"
        >
          <FormLabel
            style={{
              color: "blue",
              marginLeft: 350,
              fontWeight: 700,
              fontSize: 20,
            }}
            component="legend"
          >
            Freeze Price
          </FormLabel>
        </Grid>
        <Box
          sx={{
            width: 800,
            // height: 420,
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container direction="row" style={{ marginTop: 20 }}>
            <Grid item style={{ marginLeft: 0, width: "75%" }}>
              <Field
                label=""
                id="product"
                name="product"
                defaultValue={productName + "(" + configuration + ")"}
                helperText="Product Name"
                type="text"
                component={renderProductNameField}
              />
            </Grid>
            <Grid item style={{ width: "22.5%", marginLeft: 15 }}>
              <Field
                label=""
                id="sku"
                name="sku"
                defaultValue={sku}
                helperText="Sku"
                type="text"
                component={renderSkuField}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" style={{ marginTop: 10 }}>
            <Grid item style={{ marginLeft: 0, width: "22%" }}>
              <Field
                label=""
                id="minimumFreezableQuantity"
                name="minimumFreezableQuantity"
                type="number"
                defaultValue={minimumFreezableQuantity}
                helperText="Minimum Freezable Quantity"
                component={renderMinimumFreezableQuantityField}
                autoComplete="off"
                //style={{ marginTop: 10 }}
              />
            </Grid>

            <Grid item style={{ width: "31.5%", marginLeft: 15 }}>
              <Field
                label=""
                id="freezedPrice"
                name="freezedPrice"
                defaultValue={`=N= ${
                  productPrice
                    ? productPrice
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                    : 0
                }`}
                type="text"
                helperText="Product Price To Freeze"
                component={renderProductPriceField}
                autoComplete="off"
                //style={{ marginTop: 10 }}
              />
            </Grid>
            <Grid item style={{ marginLeft: 15, width: "42%" }}>
              <Field
                label=""
                id="freezedPriceMaximumDurationInWeeks"
                name="freezedPriceMaximumDurationInWeeks"
                defaultValue={freezedPriceMaximumDurationInWeeks}
                type="text"
                helperText=" Maximum Freezable Duration(in Weeks)"
                component={renderFreezedPriceMaximumDurationInWeeksField}
              />
            </Grid>
          </Grid>

          <Grid container direction="row" style={{ marginTop: 10 }}>
            <Grid item style={{ width: "28%" }}>
              <Field
                label=""
                id="freezedQuantity"
                name="freezedQuantity"
                type="number"
                onChange={handleFreezedQuantityChange}
                helperText="What Quantity Do You Want To Freeze?"
                component={renderQuantityRequestedField}
                autoComplete="off"
                style={{ marginTop: 10 }}
              />
            </Grid>
            <Grid item style={{ width: "34%", marginLeft: 10 }}>
              <Field
                label=""
                id="freezeDuration"
                name="freezeDuration"
                defaultValue={freezeDurationInWeek}
                helperText="Enter the Duration Of The Freeze(in Weeks)"
                type="number"
                onChange={handleFreezeDurationChange}
                component={renderFreezeDurationField}
                style={{ marginTop: 10 }}
              />
            </Grid>
            <Grid item style={{ width: "35%", marginLeft: 10, marginTop: 10 }}>
              <Field
                label=""
                id="serviceCharge"
                name="serviceCharge"
                defaultValue={`=N= ${
                  serviceCharge
                    ? serviceCharge
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                    : 0
                }`}
                helperText="Service Charge"
                type="text"
                component={renderServiceChargeField}
                style={{ marginTop: 10 }}
              />
            </Grid>
          </Grid>

          {/* <Button
            variant="contained"
            className={classes.submitButton}
            onClick={props.handleSubmit(onSubmit)}
          >
            {loading ? (
              <CircularProgress size={30} color="inherit" />
            ) : (
              buttonContent()
            )}
          </Button> */}

          {!makePayment && (
            <Button
              variant="contained"
              className={classes.submitButton}
              onClick={onSubmit}
            >
              {loading ? (
                <CircularProgress size={30} color="inherit" />
              ) : (
                buttonContent()
              )}
            </Button>
          )}
          {makePayment &&
            renderOnlinePayment(
              customerEmail,
              amountForPayment,
              freezePriceNumber,
              customerPhoneNumber,
              customerName
            )}
        </Box>
      </form>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: { backgroundColor: alert.backgroundColor },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </div>
  );
}

export default reduxForm({
  form: "freezePriceform",
})(FreezePrice);
