import React from "react";
import { useTranslation } from "react-i18next";
import FeatureTemplate from "../../component/FeatureTemplate";

export default function ScalabilityPage () {
    const { t } = useTranslation()

    return (
        <div>
        <FeatureTemplate title={t(`landing_page.key_features.scalability.title`)} description={t(`landing_page.key_features.scalability.description`)}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, risus id sodales volutpat, nisl urna consectetur justo, id ultricies lorem arcu id turpis. Quisque venenatis vitae nisi id interdum. Fusce vehicula tortor a justo porta vehicula. Aliquam erat volutpat. In hac habitasse platea dictumst. Integer congue fermentum nisi, ac rhoncus mi eleifend ac. Sed sed tortor aliquam, faucibus libero eget, lacinia elit. Vivamus vitae eleifend odio. Sed fringilla mauris non nisi hendrerit, eget consequat ligula malesuada. Sed ut lorem rutrum, congue odio ac, fringilla metus. Sed aliquet, lectus in efficitur viverra, massa justo dictum sem, vitae suscipit risus turpis sit amet risus. Sed pulvinar nulla vel nibh interdum, vel bibendum ligula placerat. Nunc sit amet condimentum metus. Sed ac magna ut turpis mollis commodo.</p>
        </FeatureTemplate>
        </div>
    )
}