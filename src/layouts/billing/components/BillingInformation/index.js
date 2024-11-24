/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";
import BillingEmpty from "./imgs/billing_empty.svg";
import { useState } from "react";
import "./style.css";

const EmptyState = ({ onAdd = () => {} }) => {
  return (
    <div className="billing-empty">
      <img src={BillingEmpty} alt="Billing Empty" />
      <div className="billing-empty-title">Looks like your billing details aren't set up yet</div>
      <div className="billing-empty-subtitle">
        Adding your information ensures uninterrupted access and smooth transactions."
      </div>
      <div className="billing-empty-btn" onClick={onAdd}>
        Add billing information
      </div>
    </div>
  );
};

const BillingDetailsForm = ({ onSave = () => {} }) => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="billing-form">
      <div className="billing-form-title">
        Provide your billing details to keep your account up to date
      </div>
      <div className="billing-form-inputs">
        <div className="billing-form-input">
          <label htmlFor="name">Company Name</label>
          <input
            type="text"
            id="company"
            placeholder="Jimo"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="billing-form-input">
          <label htmlFor="company">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Snow"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="billing-form-input">
          <label htmlFor="email">Billing address</label>
          <input
            type="text"
            id="address"
            placeholder="11 avenue le Marchal, Paris"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="billing-form-input">
          <label htmlFor="vat">Country</label>
          <input
            type="text"
            id="country"
            placeholder="France"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
      </div>
      <div
        className="billing-form-btn"
        onClick={() => {
          if (!company || !name || !address || !country) {
            return;
          }

          onSave({
            company,
            name,
            address,
            country,
          });
        }}
      >
        Save billing information
      </div>
    </div>
  );
};

function BillingInformation() {
  const [bills, setBills] = useState([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2} className="billing-header">
        <SoftTypography variant="h6" fontWeight="medium">
          Billing Information
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2} className="billing-body">
        {showForm === true ? (
          <BillingDetailsForm
            onSave={(bill) => {
              setBills([...bills, bill]);
              setShowForm(false);
            }}
          />
        ) : bills.length === 0 ? (
          <EmptyState onAdd={() => setShowForm(true)} />
        ) : (
          <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            {bills.map((bill, index) => (
              <Bill
                key={index}
                name={bill.name}
                company={bill.company}
                email={bill.email}
                vat={bill.vat || "FRB1235476"}
                onDelete={() => {
                  const newBills = [...bills];
                  newBills.splice(index, 1);
                  setBills(newBills);
                }}
              />
            ))}
            {/* <Bill
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <Bill
            name="lucas harper"
            company="stone tech zone"
            email="lucas@stone-tech.com"
            vat="FRB1235476"
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          /> */}
          </SoftBox>
        )}
      </SoftBox>
    </Card>
  );
}

export default BillingInformation;
