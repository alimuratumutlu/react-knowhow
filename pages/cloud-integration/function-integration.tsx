import TabTemplate from '@templates/Tab.template';
import { GeneralContent } from '@data/PageContent';

export default function FunctionIntegration() {
  return (
    <TabTemplate
      tabList={GeneralContent}
      pageTitle="Function Integration"
      pageSummary="Function Integration is the process of connecting your application to a third-party function. This allows your application to access data from the third-party function and use it to enhance your application."
    />
  );
}
