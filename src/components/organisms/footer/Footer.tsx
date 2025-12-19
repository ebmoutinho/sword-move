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
    FooterItemLink,
} from "./Footer.styles";

const Footer: React.FC = () => {
    return (
        <FooterWrapper data-testid="footer">
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
                        <FooterItemLink href={`mailto:${FooterEnum.Email}`}>
                            {FooterEnum.Email}
                        </FooterItemLink>
                        <FooterItem>{FooterEnum.Telephone}</FooterItem>
                    </GroupWrapper>
                </InfoColumn>
            </InfoWrapper>
        </FooterWrapper>
    );
};

export default Footer;
