import React from 'react';
import EmployeeDetails from "@/components/EmployeeDetails/EmployeeDetails";
import NavBar from "@/components/NavBar/NavBar";
import PositionRelativeLayout from "@/components/PositionRelativeLayout/PositionRelativeLayout";
import Team from "@/components/Team/Team";
const EmployeeDetailsPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <PositionRelativeLayout>
                <EmployeeDetails />
            </PositionRelativeLayout>
        </>
    );
};

export default EmployeeDetailsPage;