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
      helperText="Weight Per Unit"
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

const MAX_COUNT = 12;

function UpdatePackageReadinessForm(props) {
  const classes = useStyles();
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [vendor, setVendor] = useState("");
  const [image, setImage] = useState();
  const [cityList, setCityList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [vendorList, setVendorList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [currency, setCurrency] = useState();
  const [location, setLocation] = useState();
  const [country, setCountry] = useState();
  const [isFeaturedProduct, setIsFeaturedProduct] = useState(false);
  const [isVatable, setIsVatable] = useState();
  const [pricingMechanism, setPricingMechanism] = useState();
  const [allowSubscription, setAllowSubscription] = useState(false);
  const [hasVariant, setHasVariant] = useState(false);
  const [salesPreference, setSalesPreference] = useState("retail");
  const [displayOnStore, setDisplayOnStore] = useState("yes");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const [stockStatus, setStockStatus] = useState("in-stock");
  const [unit, setUnit] = useState("kg");
  const [allowPriceFreezing, setAllowPriceFreezing] = useState(false);
  const [allowFreezedPriceLowBound, setAllowFreezedPriceLowBound] =
    useState(false);

  const [loading, setLoading] = useState(false);
  const [willTreat, setWillTreat] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
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
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
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
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
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
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
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
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
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
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
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

  const onImageChange = (e) => {
    setImage(e.target.value);
    console.log("the image is:", image);
  };

  const handleVendorChange = (event) => {
    setVendor(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
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
    if (event.target.value === true) {
      setWillTreat(true);
    } else {
      setWillTreat(false);
    }
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

    if (!formValues["name"]) {
      props.handleFailedSnackbar("Please enter the name of the product");
      setLoading(false);
      return;
    }

    if (!formValues["configuration"]) {
      props.handleFailedSnackbar(
        "Please enter the product configuration and try again"
      );
      setLoading(false);
      return;
    }

    if (!formValues["pricePerUnit"]) {
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

    if (!formValues["minimumQuantity"]) {
      props.handleFailedSnackbar(
        "Please enter the product's required minimum quantity and try again"
      );
      setLoading(false);
      return;
    }

    if (!formValues["weightPerUnit"]) {
      props.handleFailedSnackbar(
        "Please enter the product's weight  and try again"
      );
      setLoading(false);
      return;
    }

    if (!unit) {
      props.handleFailedSnackbar(
        "Please select the Product weight unit and try again"
      );
      setLoading(false);
      return;
    }

    const form = new FormData();
    form.append("name", formValues.name);
    form.append("configuration", formValues.configuration);
    form.append("isFeaturedProduct", isFeaturedProduct);
    form.append(
      "shortDescription",
      formValues.shortDescription ? formValues.shortDescription : ""
    );
    form.append(
      "fullDescription",
      formValues.fullDescription ? formValues.fullDescription : ""
    );

    form.append("category", category);
    form.append("displayOnStore", displayOnStore);
    form.append("stockStatus", stockStatus);
    form.append("salesPreference", salesPreference);
    form.append("allowSubscription", allowSubscription);
    form.append("pricingMechanism", pricingMechanism);
    form.append("isVatable", isVatable);
    form.append("hasVariant", hasVariant);

    form.append("currency", currency);
    form.append("unit", unit);
    form.append("createdBy", props.userId);

    form.append("pricePerUnit", formValues.pricePerUnit);
    form.append("keyword1", formValues.keyword1 ? formValues.keyword1 : "");
    form.append("keyword2", formValues.keyword2 ? formValues.keyword2 : "");
    form.append("keyword3", formValues.keyword3 ? formValues.keyword3 : "");
    form.append("minimumQuantity", formValues.minimumQuantity);

    form.append("priceLabel", formValues.priceLabel);
    form.append("slug", formValues.slug);
    form.append("brand", formValues.brand);
    form.append("sku", formValues.sku);
    form.append("barcode", formValues.barcode);
    form.append("weightPerUnit", formValues.weightPerUnit);
    form.append("marketPricingCondition", formValues.marketPricingCondition);
    form.append("deliverability", formValues.deliverability);
    form.append("pickupInfo", formValues.pickupInfo);

    form.append("allowPriceFreezing", allowPriceFreezing);
    form.append("allowFreezedPriceLowBound", allowFreezedPriceLowBound);
    form.append("freezedPriceLowBound", formValues.freezedPriceLowBound);
    form.append(
      "chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound",
      formValues.chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound
    );
    form.append(
      "chargesPerWeekOnFreezedPriceServiceWithPriceLowBound",
      formValues.chargesPerWeekOnFreezedPriceServiceWithPriceLowBound
    );
    form.append(
      "freezedPriceMaximumDurationInWeeks",
      formValues.freezedPriceMaximumDurationInWeeks
    );
    form.append(
      "minimumFreezableQuantity",
      formValues.minimumFreezableQuantity
    );

    // if (!formValues["sku"]) {
    //   const sku =
    //     "SKU" + "-" + Math.floor(Math.random() * 100000000) + "-" + "PR";

    //   form.append("sku", sku);
    // }

    if (formValues.imageCover) {
      form.append("imageCover", formValues.imageCover[0]);
    }

    for (let i = 0; i < uploadedFiles.length; i++) {
      form.append(`images`, uploadedFiles[i]);
    }

    if (form) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.post(`/products`, form);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_PRODUCT,
            payload: response.data.data.data,
          });

          props.handleSuccessfulCreateSnackbar(
            `${response.data.data.data.name} Product is added successfully!!!`
          );
          props.renderProductUpdateCounter();
          props.handleDialogOpenStatus();
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar("Something went wrong, please try again!!!");
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };

  return (
    <div>
      <form id="updatePackageReadinessForm" className={classes.formStyles}>
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
            <Typography variant="h5">Add Product</Typography>
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
                type="text"
                component={renderSkuField}
              />
            </Grid>
          </Grid>
          <Field
            label=""
            id="barcode"
            name="barcode"
            type="text"
            component={renderBarcodeField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />

          <Field
            label=""
            id="name"
            name="name"
            type="text"
            component={renderProductNameField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />
          <Field
            label=""
            id="configuration"
            name="configuration"
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
            rows={4}
            type="text"
            component={renderMultilineField}
          />
          <Field
            label=""
            id="fullDescription"
            name="fullDescription"
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
                type="number"
                component={renderWeightPerUnitField}
              />
            </Grid>
            <Grid item style={{ width: "47%", marginLeft: 10 }}>
              <Field
                label=""
                id="unit"
                name="unit"
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
                type="text"
                component={renderProductKeyword1Field}
              />
            </Grid>
            <Grid item style={{ width: "100%", marginTop: 15 }}>
              <Field
                label=""
                id="keyword2"
                name="keyword2"
                type="text"
                component={renderProductKeyword2Field}
              />
            </Grid>
            <Grid item style={{ width: "100%", marginTop: 15 }}>
              <Field
                label=""
                id="keyword3"
                name="keyword3"
                type="text"
                component={renderProductKeyword3Field}
              />
            </Grid>
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
  form: "updatePackageReadinessForm",
})(UpdatePackageReadinessForm);
