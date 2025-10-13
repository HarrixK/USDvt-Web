import { Content, Section } from "../layout/Section";
import AboutPage, { AboutPageProps } from "./AboutPage";

type PageIntroSectionProps = AboutPageProps & {
    asideImage: React.ReactElement
}

const IntroSection = (props: PageIntroSectionProps) => {
    const { asideImage, ...pageIntroProps } = props;
    return (
        <Section className="bg-paper">
            <Content className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr]">
                <AboutPage {...pageIntroProps} />
                {asideImage}
            </Content>
        </Section>
    );
};

export default IntroSection;
