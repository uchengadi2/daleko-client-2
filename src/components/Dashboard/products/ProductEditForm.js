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
import api from "./../../../apis/local";
import { EDIT_PRODUCT } from "../../../actions/types";

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

const MAX_COUNT = 12;

function ProductEditForm(props) {
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

  const [loading, setLoading] = useState(false);

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
            <MenuItem value={"community"}>Community Purchase</MenuItem>
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

    if (formValues.imageCover) {
      form.append("imageCover", formValues.imageCover[0]);
    }

    for (let i = 0; i < uploadedFiles.length; i++) {
      form.append(`images`, uploadedFiles[i]);
    }

    if (form) {
      const editForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.patch(`/products/${params[0].id}`, form);

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_PRODUCT,
            payload: response.data.data.data,
          });

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.name} Product is updated successfully!!!`
          );
          props.renderProductEdittedUpdateCounter();
          props.handleEditDialogOpenStatus();
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      editForm().catch((err) => {
        props.handleFailedSnackbar("Something went wrong, please try again!!!");
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };

  return (
    <div>
      <form id="producteditForm" className={classes.formStyles}>
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
            onClick={() => [props.handleEditDialogOpenStatus()]}
          />
        </Grid>
        <Grid item container style={{ marginTop: 20 }} justifyContent="center">
          <FormLabel
            style={{ color: "grey", fontSize: "1.3em" }}
            component="legend"
          >
            <Typography variant="h5">Update Product Details</Typography>
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
  form: "producteditform",
})(ProductEditForm);
