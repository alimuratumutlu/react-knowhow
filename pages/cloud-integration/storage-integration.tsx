import TabTemplate from '@templates/Tab.template';
import { StorageIntegrationContent } from '@data/PageContent';

export default function StorageIntegration() {
  return (
    <TabTemplate
      tabList={StorageIntegrationContent}
      pageTitle="Storage Integration"
      pageSummary="Cloud Storage Integration is the process of connecting your application to a third-party storage service. This allows your application to access data from the third-party storage service and use it to enhance your application."
    />
  );
}
