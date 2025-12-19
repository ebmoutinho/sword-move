import React from "react";

import SwordIcon from "../../../assets/icons/SwordIcon";
import { FooterEnum } from "../../../enums/footer.enums";

import {
    FooterWrapper,
    InfoColumn,
    InfoWrapper,
    LogoWrapper,
    GroupWrapper,
    FooterItem,
} from "./Footer.styles";

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <LogoWrapper>
                <SwordIcon />
                <FooterItem fontSize="0.875rem">{FooterEnum.Copyright}</FooterItem>
            </LogoWrapper>

            <InfoWrapper>
                <InfoColumn>
                    <GroupWrapper>
                        <FooterItem fontWeight={700}>{FooterEnum.CompanyName}</FooterItem>
                        <FooterItem>{FooterEnum.Address}</FooterItem>
                    </GroupWrapper>

                    <GroupWrapper>
                        <FooterItem>{FooterEnum.Email}</FooterItem>
                        <FooterItem>{FooterEnum.Telephone}</FooterItem>
                    </GroupWrapper>
                </InfoColumn>
            </InfoWrapper>
        </FooterWrapper>
    );
};

export default Footer;
