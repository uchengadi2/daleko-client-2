import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
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
import api from "../../../apis/local";
import { CREATE_PRODUCT } from "../../../actions/types";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  formStyles: {
    width: 500,
  },
  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 100,
    marginLeft: 200,
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

const renderProductNameField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Product name"
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

      //onChange={handleInput}
    />
  );
};

const renderProductRefNumberField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Reference Number"
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

      //onChange={handleInput}
    />
  );
};

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

const renderBarcodeField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Barcode"
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

const renderPriceLabelField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Price Label"
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

const renderSlugField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Slug"
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

const renderBrandField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Product Brand"
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

const renderProductPricePerUnitField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Product Price per Unit"
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

const renderProductKeyword1Field = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Keyword"
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

const renderProductKeyword2Field = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Keyword"
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

const renderProductKeyword3Field = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Keyword"
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

const renderProductThumbnailField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  delete input.value;
  return (
    <TextField
      id={input.name}
      variant="outlined"
      type={type}
      name={input.name}
      fullWidth
      style={{ marginTop: 20 }}
      helperText={label}
      onChange={input.onChange}
    />
  );
};

const renderSkuField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Sku"
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

const renderWeightPerUnitField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Weight per Unit"
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

const renderProductMinimumOrderingQuantityField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Minimum Order Unit"
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

const renderProductConfigurationField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Product configuration"
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

const renderImagesField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      helperText={label}
      variant="outlined"
      id={input.name}
      fullWidth
      type={type}
      defaultValue={input.value}
      {...custom}
      onChange={input.onChange}
    />
  );
};

const renderMarketPricingConditionField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Market Pricing Condition"
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

const renderDeliverabilityField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Deliverability"
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

const renderPickupField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Pickup Availability"
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

const renderFreezedPriceLowBoundField = ({
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
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderChargesPerWeekOnFreezedPriceServiceWithoutPriceLowBoundField = ({
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

const renderChargesPerWeekOnFreezedPriceServiceWithPriceLowBoundField = ({
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
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderEditableMultilineField = ({
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
      defaultValue={defaultValue}
      label={label}
      id={input.name}
      // value={formInput.description}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={5}
      {...custom}
      onChange={input.onChange}

      // onChange={handleInput}
    />
  );
};

const renderEditableSingleLineField = ({
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

function ProductDuplicateForm(props) {
  const { params, token, userId } = props;

  const classes = useStyles();

  const [category, setCategory] = useState(params[0].categoryId);
  const [cityList, setCityList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [vendorList, setVendorList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [currency, setCurrency] = useState(params[0].currency);
  const [country, setCountry] = useState();
  const [isFeaturedProduct, setIsFeaturedProduct] = useState(
    params[0].isFeaturedProduct
  );
  const [isVatable, setIsVatable] = useState(params[0].isVatable);
  const [pricingMechanism, setPricingMechanism] = useState(
    params[0].pricingMechanism
  );
  const [allowSubscription, setAllowSubscription] = useState(
    params[0].allowSubscription
  );
  const [hasVariant, setHasVariant] = useState(params[0].hasVariant);
  const [salesPreference, setSalesPreference] = useState(
    params[0].salesPreference
  );
  const [displayOnStore, setDisplayOnStore] = useState(
    params[0].displayOnStore
  );
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const [stockStatus, setStockStatus] = useState(params[0].stockStatus);
  const [unit, setUnit] = useState(params[0].unit);
  const [allowPriceFreezing, setAllowPriceFreezing] = useState(
    params[0].allowPriceFreezing
  );
  const [allowFreezedPriceLowBound, setAllowFreezedPriceLowBound] = useState(
    params[0].allowFreezedPriceLowBound
  );
  const [communityDeliveryType, setCommunityDeliveryType] = useState(
    params[0].communityDeliveryType
  );

  const [showDealPricePerUnit, setShowDealPricePerUnit] = useState(
    params[0].showDealPricePerUnit
  );
  const [allowDealQuantityChange, setAllowDealQuantityChange] = useState(
    params[0].allowDealQuantityChange
  );
  const [dealStatus, setDealStatus] = useState(params[0].dealStatus);
  const [dealType, setDealType] = useState(params[0].dealType);
  const [productType, setProductType] = useState(params[0].productType);
  const [dealDeliveryMode, setDealDeliveryMode] = useState(
    params[0].dealDeliveryMode
  );
  const [showDealDeliveryCost, setShowDealDeliveryCost] = useState(
    params[0].showDealDeliveryCost
  );
  const [showDealPaymentDetails, setShowDealPaymentDetails] = useState(
    params[0].showDealPaymentDetails
  );
  const [dealPaymentPreference, setDealPaymentPreference] = useState(
    params[0].dealPaymentPreference
  );
  const [requestDealRedemptionCode, setRequestDealRedemptionCode] = useState(
    params[0].requestDealRedemptionCode
  );
  const [isAContributoryDeal, setIsAContributoryDeal] = useState(
    params[0].isAContributoryDeal
  );
  const [community, setCommunity] = useState(params[0].dealOwner);
  const [communityList, setCommunityList] = useState([]);
  const [entityList, setEntityList] = useState([]);
  const [entity, setEntity] = useState(params[0].dealOwnerEntity);

  const [
    dealInitialPercentageContribution,
    setDealInitialPercentageContribution,
  ] = useState(params[0].dealInitialPercentageContribution);
  const [dealMaximumInstallmentAllowed, setDealMaximumInstallmentAllowed] =
    useState(params[0].dealMaximumInstallmentAllowed);
  const [includeGatewayChargesInPrice, setIncludeGatewayChargesInPrice] =
    useState(params[0].includeGatewayChargesInPrice);
  const [gatewayFixedCharge, setGatewayFixedCharge] = useState(
    params[0].gatewayFixedCharge
  );
  const [gatewayRateCharge, setGatewayRateCharge] = useState(
    params[0].gatewayRateCharge
  );

  const [isACreditDeal, setIsACreditDeal] = useState(params[0].isACreditDeal);
  const [preferredEntityVariant, setPreferredEntityVariant] = useState(
    params[0].preferredEntityVariant
  );
  const [dealSlug, setDealSlug] = useState(params[0].dealSlug);

  const [loading, setLoading] = useState(false);
  const [imageCover, setImageCover] = useState(params[0].imageCover);
  const [images, setImages] = useState(params[0].images);

  console.log("image cover is:", imageCover);
  console.log("images are:", images);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // 👇️ scroll to top on page load
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [allowPriceFreezing]);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.get(`/countries`);
      const workingData = response.data.data.data;
      workingData.map((state) => {
        allData.push({ id: state._id, name: state.name });
      });
      setCountryList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.get(`/states`, {
        params: { country: country },
      });
      const workingData = response.data.data.data;
      workingData.map((state) => {
        allData.push({ id: state._id, name: state.name });
      });
      setStateList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [country]);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.get(`/cities`);
      const workingData = response.data.data.data;
      workingData.map((city) => {
        allData.push({ id: city._id, name: city.name });
      });
      setCityList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.get(`/categories`);
      const workingData = response.data.data.data;
      workingData.map((category) => {
        allData.push({ id: category._id, name: category.name });
      });
      setCategoryList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.get(`/vendors`);
      const workingData = response.data.data.data;
      workingData.map((vendor) => {
        allData.push({ id: vendor._id, name: vendor.name });
      });
      setVendorList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.get(`/currencies`);
      const workingData = response.data.data.data;
      workingData.map((vendor) => {
        allData.push({ id: vendor._id, name: vendor.name });
      });
      setCurrencyList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/states`, {
        params: { entityType: "organizational" },
      });
      const workingData = response.data.data.data;
      workingData.map((state) => {
        allData.push({ id: state._id, name: state.name });
      });
      setEntityList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/communities`, {
        params: { state: entity },
      });
      const workingData = response.data.data.data;
      workingData.map((community) => {
        allData.push({ id: community._id, name: community.name });
      });
      setCommunityList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [entity]);

  //get the community list
  const renderCommunityList = () => {
    return communityList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the entity list
  const renderEntityList = () => {
    return entityList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the vendor list
  const renderVendorList = () => {
    return vendorList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the city list
  const renderCityList = () => {
    return cityList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the vendor list
  const renderCategoryList = () => {
    return categoryList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the currency list
  const renderCurencyList = () => {
    return currencyList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the state list
  const renderLocationList = () => {
    return stateList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the country list
  const renderCountryList = () => {
    return countryList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleIsFeaturedProductChange = (event) => {
    setIsFeaturedProduct(event.target.value);
  };

  const handlePricingMechanismChange = (event) => {
    setPricingMechanism(event.target.value);
  };

  const handleIsVatableChange = (event) => {
    setIsVatable(event.target.value);
  };

  const handleAllowSubscriptionChange = (event) => {
    setAllowSubscription(event.target.value);
  };

  const handleHasVariantChange = (event) => {
    setHasVariant(event.target.value);
  };

  const handleSalesPreferenceChange = (event) => {
    setSalesPreference(event.target.value);
  };

  const handleDisplayOnStoreChange = (event) => {
    setDisplayOnStore(event.target.value);
  };
  const handleStockStatusChange = (event) => {
    setStockStatus(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleAllowPriceFreezingChange = (event) => {
    setAllowPriceFreezing(event.target.value);
  };

  const handleAllowFreezedPriceLowBoundChange = (event) => {
    setAllowFreezedPriceLowBound(event.target.value);
  };

  const handleCommunityDeliveryTypeChange = (event) => {
    setCommunityDeliveryType(event.target.value);
  };

  const handleShowDealPricePerUnitChange = (event) => {
    setShowDealPricePerUnit(event.target.value);
  };

  const handleDealStatusChange = (event) => {
    setDealStatus(event.target.value);
  };

  const handleDealTypeChange = (event) => {
    setDealType(event.target.value);
  };

  const handleAllowDealQuantityChange = (event) => {
    setAllowDealQuantityChange(event.target.value);
  };

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  const handleProductDealDeliveryModeChange = (event) => {
    setDealDeliveryMode(event.target.value);
  };

  const handleShowDealDeliveryCostChange = (event) => {
    setShowDealDeliveryCost(event.target.value);
  };

  const handleShowDealPaymentDetailsChange = (event) => {
    setShowDealPaymentDetails(event.target.value);
  };

  const handleDealPaymentPreferenceChange = (event) => {
    setDealPaymentPreference(event.target.value);
  };

  const handleRequestDealRedemptionCodeChange = (event) => {
    setRequestDealRedemptionCode(event.target.value);
  };

  const handleIsAContibutoryDealChange = (event) => {
    setIsAContributoryDeal(event.target.value);
  };

  const handleIsACreditDealChange = (event) => {
    setIsACreditDeal(event.target.value);
  };

  const handlePreferredEntityVariantChange = (event) => {
    setPreferredEntityVariant(event.target.value);
  };

  const handleCommunityChange = (event) => {
    setCommunity(event.target.value);
  };

  const handleEntityChange = (event) => {
    setEntity(event.target.value);
  };

  const handleShouldIncludeGatewayChargesInPriceChange = (event) => {
    setIncludeGatewayChargesInPrice(event.target.value);
  };

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  // const onGatewayFixedChargeValue = (e) => {
  //   if (e.target.value < 0) {
  //     setGatewayFixedChargeValue(0);
  //   }
  // };

  // const onGatewayRateChargeValueChange = (e) => {
  //   if (e.target.value < 0) {
  //     setGatewayRateChargeValue(0);
  //   }
  //   if (e.target.value > 1) {
  //     setGatewayRateChargeValue(1);
  //   }
  // };

  const renderIsProductFeatureField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="isFeaturedProduct"
            id="isFeaturedProduct"
            value={isFeaturedProduct}
            onChange={handleIsFeaturedProductChange}
            label="Is Featured"
            style={{ width: 500, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>False</MenuItem>
            <MenuItem value={"true"}>True</MenuItem>
          </Select>
          <FormHelperText>Set isFeatured Property</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderIsVatableField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="isVatable"
            id="isVatable"
            value={isVatable}
            onChange={handleIsVatableChange}
            label="Is VAT-able"
            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>No</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
          </Select>
          <FormHelperText>Is VAT-able?</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderUnitField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="unit"
            id="unit"
            value={unit}
            onChange={handleUnitChange}
            label="Unit"
            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"kg"}>kilogram</MenuItem>
            <MenuItem value={"g"}>gram</MenuItem>
            <MenuItem value={"ibs"}>pounds</MenuItem>
            <MenuItem value={"tonnes"}>tonnes</MenuItem>
          </Select>
          <FormHelperText>Unit</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderSalesPreferenceField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="salesPreference"
            id="salesPreference"
            value={salesPreference}
            onChange={handleSalesPreferenceChange}
            label="Is VAT-able"
            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"retail"}>Retail</MenuItem>
            <MenuItem value={"derica"}>Derica</MenuItem>
            <MenuItem value={"paint"}>Paint</MenuItem>
            <MenuItem value={"wholesale"}>Wholesale(Bulk Sales)</MenuItem>
            {/* <MenuItem value={"community"}>Community Purchase</MenuItem> */}
            <MenuItem value={"deal"}>Setup a Deal</MenuItem>
            {/* <MenuItem value={"contributory-deal"}>
              Setup a Contributory Deal
            </MenuItem> */}
          </Select>
          <FormHelperText>Product Sales Preference</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderStockStatusField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="stockStatus"
            id="stockStatus"
            value={stockStatus}
            onChange={handleStockStatusChange}
            label="Stock Status"
            style={{ width: 500, marginTop: 20, height: 38 }}
            //{...input}
          >
            <MenuItem value={"in-stock"}>In Stock</MenuItem>
            <MenuItem value={"out-of-stock"}>Out Of Stock</MenuItem>
          </Select>
          <FormHelperText>Product Stock Status</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderDisplayOnStoreField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="displayOnStore"
            id="displayOnStore"
            value={displayOnStore}
            onChange={handleDisplayOnStoreChange}
            label="Display On Store?"
            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"no"}>No</MenuItem>
          </Select>
          <FormHelperText>Display On Store</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAllowSubscriptionField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="allowSubscription"
            id="allowSubscription"
            value={allowSubscription}
            onChange={handleAllowSubscriptionChange}
            label="Allow Subscription?"
            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>No</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
          </Select>
          <FormHelperText>Allow Subscription?</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderHasVariantField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="hasVariant"
            id="hasVariant"
            value={hasVariant}
            onChange={handleHasVariantChange}
            label="Has Variants?"
            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>No</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
          </Select>
          <FormHelperText>Has Variant?</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderPricingMechanismField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="pricingMechanism"
            id="pricingMechanism"
            value={pricingMechanism}
            onChange={handlePricingMechanismChange}
            label="Price Mechanism"
            style={{ width: 500, marginTop: 20, height: 38 }}
            //{...input}
          >
            <MenuItem value={"pricing"}>Pricing</MenuItem>
            <MenuItem value={"request-quote"}>Request For a Quote</MenuItem>
            <MenuItem value={"bidding"}>Bidding</MenuItem>
          </Select>
          <FormHelperText>Price Mechanism</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderProductPriceCurrencyField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="currency"
            id="currency"
            value={currency}
            onChange={handleCurrencyChange}
            label="Currency"
            style={{ width: 190, marginTop: 0, height: 38 }}
            //{...input}
          >
            {renderCurencyList()}
          </Select>
          <FormHelperText>Price Currency</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderCategoryField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="category"
            id="category"
            value={category}
            onChange={handleCategoryChange}
            label="Category"
            style={{ marginTop: 0, width: 310, height: 38, marginLeft: 0 }}
            //{...input}
          >
            {renderCategoryList()}
          </Select>
          <FormHelperText>Product Category</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAllowPriceFreezingField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="allowPriceFreezing"
            id="allowPriceFreezing"
            value={allowPriceFreezing}
            onChange={handleAllowPriceFreezingChange}
            //label="Allow Price Freezing"
            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>No</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
          </Select>
          <FormHelperText>Allow Price Freezing?</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAllowFreezedPriceLowBoundField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="allowFreezedPriceLowBound"
            id="allowFreezedPriceLowBound"
            value={allowFreezedPriceLowBound}
            onChange={handleAllowFreezedPriceLowBoundChange}
            //label="Allow Price Freezing"
            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>No</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
          </Select>
          <FormHelperText>Allow Freezed Price Low Bound?</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderCommunityDeliveryTypeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="communityDeliveryType"
            id="communityDeliveryType"
            value={communityDeliveryType}
            onChange={handleCommunityDeliveryTypeChange}
            //label="Price Mechanism"
            style={{ width: 500, marginTop: 20, height: 38 }}
            //{...input}
          >
            <MenuItem value={"same-locatiion"}>Same Location</MenuItem>
            <MenuItem value={"diverse-location"}>Diverse Location</MenuItem>
            <MenuItem value={"hybrid"}>Hybrid </MenuItem>
          </Select>
          <FormHelperText>Community Delivery Type</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderShowDealPricePerUnitField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="showDealPricePerUnit"
            id="showDealPricePerUnit"
            value={showDealPricePerUnit}
            onChange={handleShowDealPricePerUnitChange}
            //label="Allow Price Freezing"

            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>No</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
          </Select>
          <FormHelperText>Show Deal Price Per Unit</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderDealStatusField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="dealStatus"
            id="dealStatus"
            value={dealStatus}
            onChange={handleDealStatusChange}
            //label="Allow Price Freezing"

            style={{ width: 237, marginTop: 20, height: 38 }}
            //{...input}
          >
            <MenuItem value={"inactive"}>Not Active</MenuItem>
            <MenuItem value={"active"}>Active</MenuItem>
          </Select>
          <FormHelperText>Select Deal Status</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderDealTypeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="dealType"
            id="dealType"
            value={dealType}
            onChange={handleDealTypeChange}
            //label="Allow Price Freezing"

            style={{ width: 237, marginTop: 20, height: 38 }}
            //{...input}
          >
            <MenuItem value={"public"}>Public</MenuItem>
            <MenuItem value={"private"}>Private</MenuItem>
          </Select>
          <FormHelperText>Select Deal Type</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAllowDealQuantityChangeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="allowDealQuantityChange"
            id="allowDealQuantityChange"
            value={allowDealQuantityChange}
            onChange={handleAllowDealQuantityChange}
            //label="Allow Price Freezing"

            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>No</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
          </Select>
          <FormHelperText>Allow Deal Quantity Change?</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderProductTypeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="productType"
            id="productType"
            value={productType}
            onChange={handleProductTypeChange}
            //label="Allow Price Freezing"

            style={{ width: 500, marginTop: 20, height: 38 }}
            //{...input}
          >
            <MenuItem value={"single-product"}>Single Product</MenuItem>
            <MenuItem value={"multiple-but-same-product"}>
              Multiple But Same Product
            </MenuItem>
            <MenuItem value={"multiple-but-different-products"}>
              Multiple But Different Products
            </MenuItem>
          </Select>
          <FormHelperText>Product Type</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderProductDealDeliveryModeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="dealDeliveryMode"
            id="dealDeliveryMode"
            value={dealDeliveryMode}
            onChange={handleProductDealDeliveryModeChange}
            //label="Allow Price Freezing"

            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"centralized-at-no-cost"}>
              Centralized At No Cost
            </MenuItem>
            <MenuItem value={"centralized-at-agreed-cost"}>
              Centralized At Agreed Cost
            </MenuItem>
            <MenuItem value={"decentralized-at-no-cost"}>
              Decentralized At No Cost
            </MenuItem>
            <MenuItem value={"decentralized-at-agreed-cost"}>
              Decentralized At Agreed Cost
            </MenuItem>
            <MenuItem value={"managed-by-each-beneficiary"}>
              Managed By Each Beneficiary
            </MenuItem>
          </Select>
          <FormHelperText>Product Deal Delivery Mode</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderShowDealDeliveryCostField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="showDealDeliveryCost"
            id="showDealDeliveryCost"
            value={showDealDeliveryCost}
            onChange={handleShowDealDeliveryCostChange}
            //label="Allow Price Freezing"

            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>No</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
          </Select>
          <FormHelperText>Show Deal Delivery Cost?</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderShowDealPaymentDetailsField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="showDealPaymentDetails"
            id="showDealPaymentDetails"
            value={showDealPaymentDetails}
            onChange={handleShowDealPaymentDetailsChange}
            //label="Allow Price Freezing"

            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>No</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
          </Select>
          <FormHelperText>Show Deal Payment Details?</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderDealPaymentPreferenceField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="dealPaymentPreference"
            id="dealPaymentPreference"
            value={dealPaymentPreference}
            onChange={handleDealPaymentPreferenceChange}
            //label="Allow Price Freezing"

            style={{ width: 237, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"each-beneficiary-make-own-payment"}>
              Each Beneficiary Make Own Payment
            </MenuItem>
            <MenuItem value={"beneficiaries-make-collective-payment"}>
              Beneficiaries Make Collective Payment
            </MenuItem>
            <MenuItem value={"payment-settled-by-an-entity"}>
              Payment Settled By An Entity
            </MenuItem>
            <MenuItem value={"no-payment-is-required"}>
              No Payment Is Required
            </MenuItem>
          </Select>
          <FormHelperText>Select Deal Payment Preference</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderRequestDealRedemptionCodeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="requestDealRedemptionCode"
            id="requestDealRedemptionCode"
            value={requestDealRedemptionCode}
            onChange={handleRequestDealRedemptionCodeChange}
            //label="Allow Price Freezing"

            style={{ width: 500, marginTop: 10, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>No</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
          </Select>
          <FormHelperText>Request Deal Redemption Code</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderIsAContributoryDealField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="isAContributoryDeal"
            id="isAContributoryDeal"
            value={isAContributoryDeal}
            onChange={handleIsAContibutoryDealChange}
            //label="Allow Price Freezing"

            style={{ width: 500, marginTop: 10, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>No</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
          </Select>
          <FormHelperText>Is this a Contributory Deal?</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderDealOwnerField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="dealOwner"
            id="dealOwner"
            value={community}
            onChange={handleCommunityChange}
            //label="Allow Price Freezing"

            style={{ width: 237, marginTop: 10, height: 38 }}
            //{...input}
          >
            {renderCommunityList()}
          </Select>
          <FormHelperText>Select The Deal Owner Community</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderEntityListField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="entity"
            id="entity"
            value={entity}
            onChange={handleEntityChange}
            //label="Allow Price Freezing"

            style={{ width: 257, marginTop: 10, height: 38 }}
            //{...input}
          >
            {renderEntityList()}
          </Select>
          <FormHelperText>Select Deal Owner Entity</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderShouldIncludeGatewayChargesInPriceField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="includeGatewayChargesInPrice"
            id="includeGatewayChargesInPrice"
            value={includeGatewayChargesInPrice}
            onChange={handleShouldIncludeGatewayChargesInPriceChange}
            //label=""
            style={{ width: 500, marginTop: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>No</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
          </Select>
          <FormHelperText>
            Include Gateway Charges to Product Price?
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderIsACreditDealField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="isACreditDeal"
            id="isACreditDeal"
            value={isACreditDeal}
            onChange={handleIsACreditDealChange}
            //label="Allow Price Freezing"

            style={{ width: 500, marginTop: 10, height: 38 }}
            //{...input}
          >
            <MenuItem value={"false"}>No</MenuItem>
            <MenuItem value={"true"}>Yes</MenuItem>
          </Select>
          <FormHelperText>Is this on Credit Deal?</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderPreferredEntityVariantField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="preferredEntityVariant"
            id="preferredEntityVariant"
            value={preferredEntityVariant}
            onChange={handlePreferredEntityVariantChange}
            //label="Preferred Entity Variant"
            style={{ width: 500, marginTop: 10, height: 38 }}
            //{...input}
          >
            <MenuItem value={"not-applicable"}>Not Applicable</MenuItem>
            <MenuItem value={"entity"}>This is an all Entity Deal</MenuItem>
            <MenuItem value={"community"}>
              This is an Entity Community Deal
            </MenuItem>
          </Select>
          <FormHelperText>Preferred Entity Variant</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const buttonContent = () => {
    return <React.Fragment> Submit</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    if (!category) {
      props.handleFailedSnackbar(
        "Please select the product category and try again"
      );
      setLoading(false);
      return;
    }

    if (!params[0].name) {
      props.handleFailedSnackbar("Please enter the name of the product");
      setLoading(false);
      return;
    }

    if (!params[0].configuration) {
      props.handleFailedSnackbar(
        "Please enter the product configuration and try again"
      );
      setLoading(false);
      return;
    }

    if (!params[0].pricePerUnit) {
      props.handleFailedSnackbar(
        "Please enter the product price per unit and try again"
      );
      setLoading(false);
      return;
    }

    if (!currency) {
      props.handleFailedSnackbar(
        "Please select the price currency of the product and try again"
      );
      setLoading(false);
      return;
    }

    if (!params[0].minimumQuantity) {
      props.handleFailedSnackbar(
        "Please enter the product's required minimum quantity and try again"
      );
      setLoading(false);
      return;
    }

    if (!params[0].unit) {
      props.handleFailedSnackbar(
        "Please enter the product's weight unit and try again"
      );
      setLoading(false);
      return;
    }

    if (includeGatewayChargesInPrice) {
      if (formValues.gatewayFixedCharge < 0) {
        props.handleFailedSnackbar(
          "The Gateway Fixed Charge cannot be lower than 0"
        );
        setLoading(false);
        return;
      }

      if (formValues.gatewayRateCharge < 0) {
        props.handleFailedSnackbar(
          "The Gateway Rate Charge cannot be lower than 0. It is between 0.00 to 1.00"
        );
        setLoading(false);
        return;
      }

      if (formValues.gatewayRateCharge > 1) {
        props.handleFailedSnackbar(
          "The Gateway Rate Charge cannot be greater than 1. It is between 0.00 to 1.00"
        );
        setLoading(false);
        return;
      }

      if (salesPreference === "deal") {
        if (isAContributoryDeal) {
          if (formValues.dealMaximumInstallmentAllowed < 1) {
            props.handleFailedSnackbar(
              "The Target Scheme Maximum Number of Installment cannot be lower than 1"
            );
            setLoading(false);
            return;
          }
        }
      }
    }

    const form = new FormData();
    form.append("name", formValues.name ? formValues.name : params[0].name);
    form.append(
      "configuration",
      formValues.configuration
        ? formValues.configuration
        : params[0].configuration
    );
    form.append(
      "isFeaturedProduct",
      isFeaturedProduct ? isFeaturedProduct : params[0].isFeaturedProduct
    );
    form.append(
      "shortDescription",
      formValues.shortDescription
        ? formValues.shortDescription
        : params[0].shortDescription
    );
    form.append(
      "fullDescription",
      formValues.fullDescription
        ? formValues.fullDescription
        : params[0].fullDescription
    );

    form.append("category", category ? category : params[0].category);
    form.append(
      "displayOnStore",
      displayOnStore ? displayOnStore : params[0].displayOnStore
    );
    form.append(
      "stockStatus",
      stockStatus ? stockStatus : params[0].stockStatus
    );
    form.append("unit", unit ? unit : params[0].unit);
    form.append(
      "salesPreference",
      salesPreference ? salesPreference : params[0].salesPreference
    );
    form.append(
      "allowSubscription",
      allowSubscription ? allowSubscription : params[0].allowSubscription
    );
    form.append(
      "pricingMechanism",
      pricingMechanism ? pricingMechanism : params[0].pricingMechanism
    );
    form.append("isVatable", isVatable ? isVatable : params[0].isVatable);
    form.append("hasVariant", hasVariant ? hasVariant : params[0].hasVariant);

    form.append("currency", currency ? currency : params[0].currency);
    form.append("createdBy", userId);

    form.append(
      "pricePerUnit",
      formValues.pricePerUnit ? formValues.pricePerUnit : params[0].pricePerUnit
    );
    form.append(
      "keyword1",
      formValues.keyword1 ? formValues.keyword1 : params[0].keyword1
    );
    form.append(
      "keyword2",
      formValues.keyword2 ? formValues.keyword2 : params[0].keyword2
    );
    form.append(
      "keyword3",
      formValues.keyword3 ? formValues.keyword3 : params[0].keyword3
    );
    form.append(
      "minimumQuantity",
      formValues.minimumQuantity
        ? formValues.minimumQuantity
        : params[0].minimumQuantity
    );

    form.append(
      "priceLabel",
      formValues.priceLabel ? formValues.priceLabel : params[0].priceLabel
    );
    form.append("slug", formValues.slug ? formValues.slug : params[0].slug);
    form.append("brand", formValues.brand ? formValues.brand : params[0].brand);
    form.append(
      "barcode",
      formValues.barcode ? formValues.barcode : params[0].barcode
    );
    form.append(
      "weightPerUnit",
      formValues.weightPerUnit
        ? formValues.weightPerUnit
        : params[0].weightPerUnit
    );

    form.append("sku", formValues.sku ? formValues.sku : params[0].sku);
    form.append(
      "marketPricingCondition",
      formValues.marketPricingCondition
        ? formValues.marketPricingCondition
        : params[0].marketPricingCondition
    );
    form.append(
      "deliverability",
      formValues.deliverability
        ? formValues.deliverability
        : params[0].deliverability
    );
    form.append(
      "pickupInfo",
      formValues.pickupInfo ? formValues.pickupInfo : params[0].pickupInfo
    );

    form.append(
      "allowPriceFreezing",
      allowPriceFreezing ? allowPriceFreezing : params[0].allowPriceFreezing
    );
    form.append(
      "allowFreezedPriceLowBound",
      allowPriceFreezing === true
        ? allowFreezedPriceLowBound
          ? allowFreezedPriceLowBound
          : params[0].allowFreezedPriceLowBound
        : 0
    );
    form.append(
      "freezedPriceLowBound",
      allowPriceFreezing === true
        ? formValues.freezedPriceLowBound
          ? formValues.freezedPriceLowBound
          : params[0].freezedPriceLowBound
        : 0
    );
    form.append(
      "chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound",
      allowPriceFreezing === true
        ? formValues.chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound
          ? formValues.chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound
          : params[0].chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound
        : 0
    );
    form.append(
      "chargesPerWeekOnFreezedPriceServiceWithPriceLowBound",
      allowPriceFreezing === true
        ? formValues.chargesPerWeekOnFreezedPriceServiceWithPriceLowBound
          ? formValues.chargesPerWeekOnFreezedPriceServiceWithPriceLowBound
          : params[0].chargesPerWeekOnFreezedPriceServiceWithPriceLowBound
        : 0
    );
    form.append(
      "freezedPriceMaximumDurationInWeeks",
      allowPriceFreezing === true
        ? formValues.freezedPriceMaximumDurationInWeeks
          ? formValues.freezedPriceMaximumDurationInWeeks
          : params[0].freezedPriceMaximumDurationInWeeks
        : 0
    );
    form.append(
      "minimumFreezableQuantity",
      formValues.minimumFreezableQuantity
        ? formValues.minimumFreezableQuantity
        : params[0].minimumFreezableQuantity
    );
    form.append(
      "requiredMaximumNumberOfCommunityMembers",
      formValues.requiredMaximumNumberOfCommunityMembers
        ? formValues.requiredMaximumNumberOfCommunityMembers
        : params[0].requiredMaximumNumberOfCommunityMembers
    );
    form.append(
      "communityTotalPurchaseableUnit",
      formValues.communityTotalPurchaseableUnit
        ? formValues.communityTotalPurchaseableUnit
        : params[0].communityTotalPurchaseableUnit
    );
    form.append(
      "communityDeliveryPeriod",
      formValues.communityDeliveryPeriod
        ? formValues.communityDeliveryPeriod
        : params[0].communityDeliveryPeriod
    );
    form.append(
      "communityDeliveryType",
      communityDeliveryType
        ? communityDeliveryType
        : params[0].communityDeliveryType
    );
    form.append(
      "communityInstruction",
      formValues.communityInstruction
        ? formValues.communityInstruction
        : params[0].communityInstruction
    );
    form.append(
      "productType",
      productType ? productType : params[0].productType
    );
    form.append(
      "dealCode",
      formValues.dealCode ? formValues.dealCode : params[0].dealCode
    );
    form.append(
      "dealExpiryDate",
      formValues.dealExpiryDate
        ? formValues.dealExpiryDate
        : params[0].dealExpiryDate
    );

    form.append("dealType", dealType ? dealType : params[0].dealType);

    form.append(
      "showDealPricePerUnit",
      showDealPricePerUnit
        ? showDealPricePerUnit
        : params[0].showDealPricePerUnit
    );

    form.append(
      "allowDealQuantityChange",
      allowDealQuantityChange
        ? allowDealQuantityChange
        : params[0].allowDealQuantityChange
    );
    form.append("dealStatus", dealStatus ? dealStatus : params[0].dealStatus);
    form.append(
      "dealComment",
      formValues.dealComment ? formValues.dealComment : params[0].dealComment
    );

    form.append(
      "dealDeliveryMode",
      dealDeliveryMode ? dealDeliveryMode : params[0].dealDeliveryMode
    );
    form.append(
      "showDealDeliveryCost",
      showDealDeliveryCost
        ? showDealDeliveryCost
        : params[0].showDealDeliveryCost
    );
    form.append(
      "dealCentralizedDeliveryLocation",
      formValues.dealCentralizedDeliveryLocation
        ? formValues.dealCentralizedDeliveryLocation
        : params[0].dealCentralizedDeliveryLocation
    );
    form.append(
      "dealCentralizedAgreedDeliveryCost",
      formValues.dealCentralizedAgreedDeliveryCost
        ? formValues.dealCentralizedAgreedDeliveryCost
        : params[0].dealCentralizedAgreedDeliveryCost
    );

    //converting string to array
    if (formValues.dealDecentralizedDeliveryLocation) {
      for (
        let i = 0;
        i < formValues.dealDecentralizedDeliveryLocation.split("\n").length;
        i++
      ) {
        form.append(
          `dealDecentralizedDeliveryLocation`,
          formValues.dealDecentralizedDeliveryLocation.split("\n")[i]
        );
      }
    }

    form.append(
      "dealDecentralizedAgreedDeliveryCost",
      formValues.dealDecentralizedAgreedDeliveryCost
        ? formValues.dealDecentralizedAgreedDeliveryCost
        : params[0].dealDecentralizedAgreedDeliveryCost
    );

    form.append(
      "showDealPaymentDetails",
      showDealPaymentDetails
        ? showDealPaymentDetails
        : params[0].showDealPaymentDetails
    );

    form.append(
      "dealPaymentPreference",
      dealPaymentPreference
        ? dealPaymentPreference
        : params[0].dealPaymentPreference
    );

    form.append(
      "requestDealRedemptionCode",
      requestDealRedemptionCode
        ? requestDealRedemptionCode
        : params[0].requestDealRedemptionCode
    );

    form.append(
      "isAContributoryDeal",
      isAContributoryDeal ? isAContributoryDeal : params[0].isAContributoryDeal
    );
    form.append("dealOwnerEntity", entity ? entity : params[0].dealOwnerEntity);
    form.append("dealOwner", community ? community : params[0].dealOwner);
    // form.append(
    //   "includeGatewayChargesInPrice",
    //   includeGatewayChargesInPrice
    //     ? includeGatewayChargesInPrice
    //     : params[0].includeGatewayChargesInPrice
    // );

    form.append(
      "dealInitialPercentageContribution",
      formValues.dealInitialPercentageContribution
        ? formValues.dealInitialPercentageContribution
        : params[0].dealInitialPercentageContribution
    );

    form.append(
      "dealMaximumInstallmentAllowed",
      formValues.dealMaximumInstallmentAllowed
        ? formValues.dealMaximumInstallmentAllowed
        : params[0].dealMaximumInstallmentAllowed
    );

    form.append(
      "includeGatewayChargesInPrice",
      includeGatewayChargesInPrice
        ? includeGatewayChargesInPrice
        : params[0].includeGatewayChargesInPrice
    );

    form.append(
      "gatewayFixedCharge",
      formValues.gatewayFixedCharge
        ? formValues.gatewayFixedCharge
        : params[0].gatewayFixedCharge
    );

    form.append(
      "gatewayRateCharge",
      formValues.gatewayRateCharge
        ? formValues.gatewayRateCharge
        : params[0].gatewayRateCharge
    );

    form.append(
      "isACreditDeal",
      isACreditDeal ? isACreditDeal : params[0].isACreditDeal
    );
    form.append(
      "dealSlug",
      formValues.dealSlug ? formValues.dealSlug : params[0].dealSlug
    );
    form.append(
      "preferredEntityVariant",
      preferredEntityVariant
        ? preferredEntityVariant
        : params[0].preferredEntityVariant
    );

    if (imageCover) {
      //form.append("imageCover", formValues.imageCover[0]);
      form.append(
        "imageCover",
        formValues.imageCover ? formValues.imageCover[0] : imageCover
      );
    }

    if (uploadedFiles) {
      for (let i = 0; i < uploadedFiles.length; i++) {
        form.append(`images`, uploadedFiles[i]);
      }
    } else {
      for (let i = 0; i < images.length; i++) {
        form.append(`images`, images[i]);
      }
    }

    if (form) {
      const duplicateForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.post(`/products`, form);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_PRODUCT,
            payload: response.data.data.data,
          });

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.name} Product is duplicated successfully!!!`
          );
          props.renderProductEdittedUpdateCounter();
          props.handleDuplicateDialogOpenStatus();
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      duplicateForm().catch((err) => {
        props.handleFailedSnackbar("Something went wrong, please try again!!!");
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };

  return (
    <div>
      <form id="productDuplicateForm" className={classes.formStyles}>
        <Grid
          item
          container
          style={{ marginTop: 1, marginBottom: 2 }}
          justifyContent="center"
        >
          <CancelRoundedIcon
            style={{
              marginLeft: 520,
              fontSize: 30,
              marginTop: "-20px",
              cursor: "pointer",
            }}
            onClick={() => [props.handleDuplicateDialogOpenStatus()]}
          />
        </Grid>
        <Grid item container style={{ marginTop: 20 }} justifyContent="center">
          <FormLabel
            style={{ color: "grey", fontSize: "1.3em" }}
            component="legend"
          >
            <Typography variant="h5">Duplicate Product</Typography>
          </FormLabel>
        </Grid>
        <Box
          sx={{
            width: 500,
            height: 420,
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container direction="row" style={{ marginTop: 20 }}>
            <Grid item style={{ marginLeft: 0, width: 310 }}>
              <Field
                label=""
                id="category"
                name="category"
                type="text"
                component={renderCategoryField}
              />
            </Grid>
            <Grid item style={{ width: 175, marginLeft: 15 }}>
              <Field
                label=""
                id="sku"
                name="sku"
                defaultValue={params[0].sku}
                type="text"
                component={renderSkuField}
              />
            </Grid>
          </Grid>
          <Field
            label=""
            id="barcode"
            name="barcode"
            defaultValue={params[0].barcode}
            type="text"
            component={renderBarcodeField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />

          <Field
            label=""
            id="name"
            name="name"
            defaultValue={params[0].name}
            type="text"
            component={renderProductNameField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />
          <Field
            label=""
            id="configuration"
            name="configuration"
            defaultValue={params[0].configuration}
            type="text"
            component={renderProductConfigurationField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />

          <Field
            label=""
            id="productType"
            name="productType"
            type="text"
            component={renderProductTypeField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />

          <Field
            label=""
            id="shortDescription"
            name="shortDescription"
            helperText="Short Description"
            defaultValue={params[0].shortDescription}
            rows={4}
            type="text"
            component={renderMultilineField}
          />
          <Field
            label=""
            id="fullDescription"
            name="fullDescription"
            defaultValue={params[0].fullDescription}
            rows={8}
            type="text"
            helperText="Detail Description"
            component={renderMultilineField}
          />

          <Grid item container style={{ marginTop: 20 }}>
            <FormLabel style={{ color: "blue" }} component="legend">
              Product Features & Attributes
            </FormLabel>
          </Grid>
          <Grid container direction="row" style={{ marginTop: 20 }}>
            <Grid item style={{ width: "50%" }}>
              <Field
                label=""
                id="weightPerUnit"
                name="weightPerUnit"
                defaultValue={params[0].weightPerUnit}
                type="number"
                component={renderWeightPerUnitField}
              />
            </Grid>
            <Grid item style={{ width: "47%", marginLeft: 10 }}>
              <Field
                label=""
                id="unit"
                name="unit"
                defaultValue={params[0].unit}
                type="text"
                component={renderUnitField}
              />
            </Grid>
          </Grid>

          <Grid container direction="row" style={{ marginTop: 20 }}>
            <Grid item style={{ width: "60%" }}>
              <Field
                label=""
                id="pricePerUnit"
                name="pricePerUnit"
                defaultValue={params[0].pricePerUnit}
                type="number"
                component={renderProductPricePerUnitField}
              />
            </Grid>
            <Grid item style={{ width: "35%", marginLeft: 10 }}>
              <Field
                label=""
                id="currency"
                name="currency"
                type="text"
                component={renderProductPriceCurrencyField}
              />
            </Grid>
          </Grid>
          <Field
            label=""
            id="priceLabel"
            name="priceLabel"
            defaultValue={params[0].priceLabel}
            type="text"
            component={renderPriceLabelField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />
          <Grid container direction="row" style={{ marginTop: 20 }}>
            <Grid item style={{ width: "50%" }}>
              <Field
                label=""
                id="minimumQuantity"
                name="minimumQuantity"
                defaultValue={params[0].minimumQuantity}
                type="number"
                component={renderProductMinimumOrderingQuantityField}
              />
            </Grid>
            <Grid item style={{ marginLeft: 10 }}>
              <Field
                label=""
                id="isVatable"
                name="isVatable"
                type="text"
                component={renderIsVatableField}
              />
            </Grid>
          </Grid>
          <Field
            label=""
            id="pricingMechanism"
            name="pricingMechanism"
            type="text"
            component={renderPricingMechanismField}
            // style={{ marginTop: 10 }}
          />
          <Grid container direction="row" style={{ marginTop: 20 }}>
            <Grid item style={{ width: "50%" }}>
              <Field
                label=""
                id="allowSubscription"
                name="allowSubscription"
                type="text"
                component={renderAllowSubscriptionField}
              />
            </Grid>
            <Grid item style={{ marginLeft: 10 }}>
              <Field
                label=""
                id="hasVariant"
                name="hasVariant"
                type="text"
                component={renderHasVariantField}
              />
            </Grid>
          </Grid>

          <Grid item container style={{ marginTop: 20, marginBottom: 20 }}>
            <FormLabel style={{ color: "blue" }} component="legend">
              Product isFeatured
            </FormLabel>
          </Grid>
          <Field
            label=""
            id="isFeaturedProduct"
            name="isFeaturedProduct"
            type="text"
            component={renderIsProductFeatureField}
            // style={{ marginTop: 10 }}
          />

          <Grid item container style={{ marginTop: 20 }}>
            <FormLabel style={{ color: "blue" }} component="legend">
              Product Keywords for Discoverability
            </FormLabel>
          </Grid>
          <Grid container direction="column" style={{ marginTop: 20 }}>
            <Grid item style={{ width: "100%" }}>
              <Field
                label=""
                id="keyword1"
                name="keyword1"
                defaultValue={params[0].keyword1}
                type="text"
                component={renderProductKeyword1Field}
              />
            </Grid>
            <Grid item style={{ width: "100%", marginTop: 15 }}>
              <Field
                label=""
                id="keyword2"
                name="keyword2"
                defaultValue={params[0].keyword2}
                type="text"
                component={renderProductKeyword2Field}
              />
            </Grid>
            <Grid item style={{ width: "100%", marginTop: 15 }}>
              <Field
                label=""
                id="keyword3"
                name="keyword3"
                defaultValue={params[0].keyword3}
                type="text"
                component={renderProductKeyword3Field}
              />
            </Grid>
          </Grid>
          <Grid item container style={{ marginTop: 20 }}>
            <FormLabel style={{ color: "blue" }} component="legend">
              Other Product Features
            </FormLabel>
          </Grid>
          <Field
            label=""
            id="marketPricingCondition"
            name="marketPricingCondition"
            defaultValue={params[0].marketPricingCondition}
            type="text"
            component={renderMarketPricingConditionField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />
          <Field
            label=""
            id="deliverability"
            name="deliverability"
            defaultValue={params[0].deliverability}
            type="text"
            component={renderDeliverabilityField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />
          <Field
            label=""
            id="pickupInfo"
            name="pickupInfo"
            defaultValue={params[0].pickupInfo}
            type="text"
            component={renderPickupField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />

          <Field
            label=""
            id="slug"
            name="slug"
            defaultValue={params[0].slug}
            type="text"
            component={renderSlugField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />
          <Field
            label=""
            id="stockStatus"
            name="stockStatus"
            defaultValue={params[0].stockStatus}
            type="text"
            component={renderStockStatusField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />

          <Field
            label=""
            id="brand"
            name="brand"
            defaultValue={params[0].brand}
            type="text"
            component={renderBrandField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />
          <Grid container direction="row" style={{ marginTop: 20 }}>
            <Grid item style={{ width: "50%" }}>
              <Field
                label=""
                id="salesPreference"
                name="salesPreference"
                type="text"
                component={renderSalesPreferenceField}
              />
            </Grid>
            <Grid item style={{ marginLeft: 10 }}>
              <Field
                label=""
                id="displayOnStore"
                name="displayOnStore"
                type="text"
                component={renderDisplayOnStoreField}
              />
            </Grid>
          </Grid>

          <Grid item container style={{ marginTop: 20, marginBottom: 20 }}>
            <FormLabel style={{ color: "blue" }} component="legend">
              Price Freezing
            </FormLabel>
          </Grid>
          <Grid container direction="row" style={{ marginTop: 20 }}>
            <Grid item style={{ width: "50%" }}>
              <Field
                label=""
                id="allowPriceFreezing"
                name="allowPriceFreezing"
                type="text"
                helperText="Allow Price Freezing"
                component={renderAllowPriceFreezingField}
              />
            </Grid>
            <Grid item style={{ marginLeft: 10 }}>
              <Field
                label=""
                id="allowFreezedPriceLowBound"
                name="allowFreezedPriceLowBound"
                helperText="Allow Freezed Price Low Bound"
                type="text"
                component={renderAllowFreezedPriceLowBoundField}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" style={{ marginTop: 20 }}>
            <Grid item style={{ width: "40%" }}>
              <Field
                label=""
                id="freezedPriceLowBound"
                name="freezedPriceLowBound"
                defaultValue={params[0].freezedPriceLowBound}
                helperText="Freezed Price Low Bound"
                type="number"
                component={renderFreezedPriceLowBoundField}
              />
            </Grid>
            <Grid item style={{ marginLeft: 10, width: "57%" }}>
              <Field
                label=""
                id="freezedPriceMaximumDurationInWeeks"
                name="freezedPriceMaximumDurationInWeeks"
                defaultValue={params[0].freezedPriceMaximumDurationInWeeks}
                helperText="Freezed Price Maximum Duration In Weeks"
                type="number"
                component={renderFreezedPriceMaximumDurationInWeeksField}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" style={{ marginTop: 20 }}>
            <Grid item style={{ width: "35%" }}>
              <Field
                label=""
                id="minimumFreezableQuantity"
                name="minimumFreezableQuantity"
                defaultValue={params[0].minimumFreezableQuantity}
                helperText="Minimum Freezeable Quantity"
                type="number"
                component={renderMinimumFreezableQuantityField}
              />
            </Grid>
            <Grid item style={{ marginLeft: 15, width: "62%" }}>
              <Field
                label=""
                id="chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound"
                name="chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound"
                defaultValue={
                  params[0]
                    .chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound
                }
                type="number"
                helperText="Service Charges Per Week for Without Price Low Bound"
                component={
                  renderChargesPerWeekOnFreezedPriceServiceWithoutPriceLowBoundField
                }
              />
            </Grid>
          </Grid>
          <Field
            label=""
            id="chargesPerWeekOnFreezedPriceServiceWithPriceLowBound"
            name="chargesPerWeekOnFreezedPriceServiceWithPriceLowBound"
            defaultValue={
              params[0].chargesPerWeekOnFreezedPriceServiceWithPriceLowBound
            }
            type="number"
            helperText="Service Charges Per Week for With Price Low Bound"
            component={
              renderChargesPerWeekOnFreezedPriceServiceWithPriceLowBoundField
            }
            style={{ marginTop: 15 }}
          />

          {salesPreference === "community" && (
            <Grid item container style={{ marginTop: 20, marginBottom: 20 }}>
              <FormLabel style={{ color: "blue" }} component="legend">
                Community Sales Extra Parameters
              </FormLabel>
            </Grid>
          )}
          {salesPreference === "community" && (
            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid item style={{ width: "50%" }}>
                <Field
                  label=""
                  id="requiredMaximumNumberOfCommunityMembers"
                  name="requiredMaximumNumberOfCommunityMembers"
                  helperText="Maximum Number of Community Members"
                  defaultValue={
                    params[0].requiredMaximumNumberOfCommunityMembers
                  }
                  type="number"
                  component={renderEditableSingleLineField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 15, width: "47%" }}>
                <Field
                  label=""
                  id="communityTotalPurchaseableUnit"
                  name="communityTotalPurchaseableUnit"
                  defaultValue={params[0].communityTotalPurchaseableUnit}
                  type="number"
                  helperText="Community Total Purchaseable Unit"
                  component={renderEditableSingleLineField}
                />
              </Grid>
            </Grid>
          )}
          {salesPreference === "community" && (
            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid item style={{ marginLeft: 0, width: "100%" }}>
                <Field
                  label=""
                  id="communityDeliveryPeriod"
                  name="communityDeliveryPeriod"
                  defaultValue={params[0].communityDeliveryPeriod}
                  type="text"
                  helperText="Community Delivery Period"
                  component={renderEditableSingleLineField}
                />
              </Grid>
            </Grid>
          )}
          {salesPreference === "community" && (
            <Field
              label=""
              id="communityDeliveryType"
              name="communityDeliveryType"
              defaultValue={params[0].communityDeliveryType}
              type="text"
              helperText="Community Delivery Type"
              component={renderCommunityDeliveryTypeField}
            />
          )}
          {salesPreference === "community" && (
            <Field
              label=""
              id="communityInstruction"
              name="communityInstruction"
              defaultValue={params[0].communityInstruction}
              type="text"
              helperText="Instruction"
              component={renderEditableMultilineField}
            />
          )}

          {salesPreference === "deal" && (
            <Grid item container style={{ marginTop: 20, marginBottom: 20 }}>
              <FormLabel style={{ color: "blue" }} component="legend">
                Deal Parameters
              </FormLabel>
            </Grid>
          )}
          {salesPreference === "deal" && (
            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid item style={{ width: "50%" }}>
                <Field
                  label=""
                  id="entity"
                  name="entity"
                  type="text"
                  //helperText="Allow the Customer to Change Deal Quantity"
                  component={renderEntityListField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 15, width: "47%" }}>
                <Field
                  label=""
                  id="dealOwner"
                  name="dealOwner"
                  type="text"
                  //helperText="Allow the Customer to Change Deal Quantity"
                  component={renderDealOwnerField}
                />
              </Grid>
            </Grid>
          )}
          {salesPreference === "deal" && (
            <Field
              label=""
              id="preferredEntityVariant"
              name="preferredEntityVariant"
              //defaultValue={params[0].dealComment}
              type="text"
              //helperText="Deal Instruction Or Direction(optional)"
              component={renderPreferredEntityVariantField}
            />
          )}
          {salesPreference === "deal" && (
            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid item style={{ width: "50%" }}>
                <Field
                  label=""
                  id="dealCode"
                  name="dealCode"
                  defaultValue={params[0].dealCode}
                  helperText="Enter the Deal Code"
                  type="text"
                  component={renderEditableSingleLineField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 15, width: "47%" }}>
                <Field
                  label=""
                  id="dealExpiryDate"
                  name="dealExpiryDate"
                  defaultValue={params[0].dealExpiryDate}
                  type="text"
                  helperText="Enter the Deal Expiry Date"
                  component={renderEditableSingleLineField}
                />
              </Grid>
            </Grid>
          )}

          {salesPreference === "deal" && (
            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid item style={{ width: "50%" }}>
                <Field
                  label=""
                  id="showDealPricePerUnit"
                  name="showDealPricePerUnit"
                  // helperText="Show Deal's Price Per Unit"
                  type="text"
                  component={renderShowDealPricePerUnitField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 15, width: "47%" }}>
                <Field
                  label=""
                  id="allowDealQuantityChange"
                  name="allowDealQuantityChange"
                  type="text"
                  //helperText="Allow the Customer to Change Deal Quantity"
                  component={renderAllowDealQuantityChangeField}
                />
              </Grid>
            </Grid>
          )}

          {salesPreference === "deal" && (
            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid item style={{ width: "50%" }}>
                <Field
                  label=""
                  id="dealType"
                  name="dealType"
                  // helperText="Show Deal's Price Per Unit"
                  type="text"
                  component={renderDealTypeField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 15, width: "47%" }}>
                <Field
                  label=""
                  id="dealStatus"
                  name="dealStatus"
                  type="text"
                  //helperText="Allow the Customer to Change Deal Quantity"
                  component={renderDealStatusField}
                />
              </Grid>
            </Grid>
          )}

          {salesPreference === "deal" && (
            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid item style={{ width: "50%" }}>
                <Field
                  label=""
                  id="dealDeliveryMode"
                  name="dealDeliveryMode"
                  // helperText="Show Deal's Price Per Unit"
                  type="text"
                  component={renderProductDealDeliveryModeField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 15, width: "47%" }}>
                <Field
                  label=""
                  id="showDealDeliveryCost"
                  name="showDealDeliveryCost"
                  type="text"
                  //helperText="Allow the Customer to Change Deal Quantity"
                  component={renderShowDealDeliveryCostField}
                />
              </Grid>
            </Grid>
          )}
          {salesPreference === "deal" && (
            <Field
              label=""
              id="dealCentralizedDeliveryLocation"
              name="dealCentralizedDeliveryLocation"
              defaultValue={params[0].dealCentralizedDeliveryLocation}
              type="text"
              helperText="Deal Centralized Delivery Location)"
              component={renderEditableMultilineField}
            />
          )}
          {salesPreference === "deal" && (
            <Field
              label=""
              id="dealDecentralizedDeliveryLocation"
              name="dealDecentralizedDeliveryLocation"
              defaultValue={params[0].dealDecentralizedDeliveryLocation}
              type="text"
              helperText="Deal Decentralized Delivery Locations(Enter Each Location Per Line))"
              component={renderEditableMultilineField}
            />
          )}
          {salesPreference === "deal" && (
            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid item style={{ width: "100%" }}>
                <Field
                  label=""
                  id="dealCentralizedAgreedDeliveryCost"
                  name="dealCentralizedAgreedDeliveryCost"
                  defaultValue={params[0].dealCentralizedAgreedDeliveryCost}
                  helperText="Enter Deal Centralized Delivery Cost"
                  type="number"
                  component={renderEditableSingleLineField}
                />
              </Grid>
              {/* <Grid item style={{ marginLeft: 15, width: "47%" }}>
                <Field
                  label=""
                  id="dealDecentralizedAgreedDeliveryCost"
                  name="dealDecentralizedAgreedDeliveryCost"
                  defaultValue={params[0].dealDecentralizedAgreedDeliveryCost}
                  type="number"
                  helperText="Enter Deal Decentralized Delivery Costy"
                  component={renderEditableSingleLineField}
                />
              </Grid> */}
            </Grid>
          )}
          {salesPreference === "deal" && (
            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid item style={{ width: "50%" }}>
                <Field
                  label=""
                  id="dealPaymentPreference"
                  name="dealPaymentPreference"
                  // helperText="Show Deal's Price Per Unit"
                  type="text"
                  component={renderDealPaymentPreferenceField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 15, width: "47%" }}>
                <Field
                  label=""
                  id="showDealPaymentDetails"
                  name="showDealPaymentDetails"
                  type="text"
                  //helperText="Allow the Customer to Change Deal Quantity"
                  component={renderShowDealPaymentDetailsField}
                />
              </Grid>
            </Grid>
          )}

          {salesPreference === "deal" && (
            <Field
              label=""
              id="requestDealRedemptionCode"
              name="requestDealRedemptionCode"
              type="text"
              //helperText="Allow the Customer to Change Deal Quantity"
              component={renderRequestDealRedemptionCodeField}
            />
          )}

          {salesPreference === "deal" && (
            <Field
              label=""
              id="isAContributoryDeal"
              name="isAContributoryDeal"
              type="text"
              //helperText="Allow the Customer to Change Deal Quantity"
              component={renderIsAContributoryDealField}
            />
          )}
          {salesPreference === "deal" && (
            <Field
              label=""
              id="isACreditDeal"
              name="isACreditDeal"
              type="text"
              //helperText="Allow the Customer to Change Deal Quantity"
              component={renderIsACreditDealField}
            />
          )}
          {salesPreference === "deal" && (
            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid item style={{ width: "50%" }}>
                <Field
                  label=""
                  id="dealInitialPercentageContribution"
                  name="dealInitialPercentageContribution"
                  defaultValue={params[0].dealInitialPercentageContribution}
                  type="number"
                  InputProps={{
                    inputProps: { min: 0.0, max: 1.0 },
                    style: { height: 38 },
                  }}
                  helperText="Percentage of Initial Contribution for Target Scheme Deal(between 0.00 to 1.00)"
                  component={renderEditableSingleLineField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 15, width: "47%" }}>
                <Field
                  label=""
                  id="dealMaximumInstallmentAllowed"
                  name="dealMaximumInstallmentAllowed"
                  defaultValue={params[0].dealMaximumInstallmentAllowed}
                  type="number"
                  InputProps={{
                    inputProps: { min: 1 },
                    style: { height: 38 },
                  }}
                  helperText="Maximum Installment Allowed for Target Scheme Deal "
                  component={renderEditableSingleLineField}
                />
              </Grid>
            </Grid>
          )}
          {/* {salesPreference === "deal" && (
            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid item style={{ width: "50%" }}>
                <Field
                  label=""
                  id="entity"
                  name="entity"
                  type="text"
                  //helperText="Allow the Customer to Change Deal Quantity"
                  component={renderEntityListField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 15, width: "47%" }}>
                <Field
                  label=""
                  id="dealOwner"
                  name="dealOwner"
                  type="text"
                  //helperText="Allow the Customer to Change Deal Quantity"
                  component={renderDealOwnerField}
                />
              </Grid>
            </Grid>
          )} */}
          {salesPreference === "deal" && (
            <Field
              label=""
              id="dealSlug"
              name="dealSlug"
              defaultValue={params[0].dealSlug}
              type="text"
              helperText="Enter this Deal's Entity Slug"
              component={renderEditableSingleLineField}
              style={{ marginTop: 10 }}
            />
          )}

          {salesPreference === "deal" && (
            <Field
              label=""
              id="dealComment"
              name="dealComment"
              defaultValue={params[0].dealComment}
              type="text"
              helperText="Deal Instruction Or Direction(optional)"
              component={renderEditableMultilineField}
            />
          )}

          <Grid item container style={{ marginTop: 20, marginBottom: 20 }}>
            <FormLabel style={{ color: "blue" }} component="legend">
              Payment Gateway Charges
            </FormLabel>
          </Grid>

          <Field
            label=""
            id="includeGatewayChargesInPrice"
            name="includeGatewayChargesInPrice"
            type="text"
            //helperText="Allow the Customer to Change Deal Quantity"
            component={renderShouldIncludeGatewayChargesInPriceField}
          />

          <Grid container direction="row" style={{ marginTop: 20 }}>
            <Grid item style={{ width: "50%" }}>
              <Field
                label=""
                id="gatewayFixedCharge"
                name="gatewayFixedCharge"
                type="number"
                InputProps={{ inputProps: { min: 0 }, style: { height: 38 } }}
                helperText="Applicable Gateway Fixed Charge"
                component={renderEditableSingleLineField}
                // value={gatewayFixedChargeValue}
                // onChange={onGatewayFixedChargeValue}
                defaultValue={params[0].gatewayFixedCharge}
                // onChange={(e) => {
                //   var value = parseInt(e.target.value, 10);

                //   // if (value > max) value = max;
                //   if (value < 0) value = 0;

                //   setGatewayFixedChargeValue(value);
                // }}
              />
            </Grid>
            <Grid item style={{ marginLeft: 15, width: "47%" }}>
              <Field
                label=""
                id="gatewayRateCharge"
                name="gatewayRateCharge"
                type="number"
                InputProps={{
                  inputProps: { min: 0.0, max: 1.0 },
                  style: { height: 38 },
                }}
                helperText="Applicable Gateway Rate Charge (between 0.00 t0 1.00) "
                component={renderEditableSingleLineField}
                defaultValue={params[0].gatewayRateCharge}
                // value={gatewayRateChargeValue}
                // onChange={onGatewayRateChargeValueChange}
              />
            </Grid>
          </Grid>
          <Grid item container style={{ marginTop: 20 }}>
            <FormLabel style={{ color: "blue" }} component="legend">
              Product images
            </FormLabel>
          </Grid>
          <Field
            label="Upload Product Thumbnail (jpg, jpeg or png formats)"
            name="imageCover"
            type="file"
            accept="image/*"
            component={renderProductThumbnailField}
          />
          <Grid item>
            <Field
              label="Upload Product Images (jpg, jpeg or png formats)"
              id="images"
              name="images"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileEvent}
              component={renderImagesField}
              style={{ marginTop: 20, width: 500 }}
              disabled={fileLimit}
            />
            {uploadedFiles.map((file) => [<br />, file.name])}
          </Grid>

          <Button
            variant="contained"
            className={classes.submitButton}
            onClick={props.handleSubmit(onSubmit)}
          >
            {loading ? (
              <CircularProgress size={30} color="inherit" />
            ) : (
              buttonContent()
            )}
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "productDuplicateForm",
})(ProductDuplicateForm);