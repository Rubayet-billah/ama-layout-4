import CheckoutForm from "@/components/checkout/components/CheckoutForm";
import Header from "@/components/home/Header";
import CustomContainer from "@/components/ui/CustomContainer";
import { fetchReportBasicData } from "@/utils/fetchFunctions";

export async function generateMetadata({ params }) {
  const { slug } = params;
  return {
    alternates: {
      canonical: `${process.env.BASE_URL}/reports/${slug}`,
    },
    robots: {
      index: false,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

export default async function page({ params }) {
  const arrays = params.slug.split("-");
  const reportId = arrays[arrays.length - 1];
  const reportData = await fetchReportBasicData(reportId);

  return (
    <>
      <Header />
      <CustomContainer>
        <CheckoutForm
          reportData={reportData}
          title={"Submit Buy Request"}
          type="OBD"
          status="DIRT"
          direct={true}
        />
      </CustomContainer>
    </>
  );
}
