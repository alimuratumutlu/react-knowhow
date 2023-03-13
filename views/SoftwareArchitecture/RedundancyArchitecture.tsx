import { ListItem, Paragraph } from '@components';

const RedundancyBasedArchitecture = (
  <>
    <Paragraph>
      Redundancy architecture is an approach to building software systems that aims to improve
      system reliability and availability by using redundant components. Redundancy architecture
      involves duplicating critical system components, so that if one component fails, another can
      take its place, without interrupting the operation of the system.
    </Paragraph>

    <Paragraph>There are several types of redundancy architecture, including:</Paragraph>

    <ListItem
      itemLabel="Hardware redundancy: "
      itemDescription="This involves duplicating hardware components, such as servers, storage devices, and network devices, to ensure that if one component fails, another can take its place."
    />

    <ListItem
      itemLabel="Software redundancy: "
      itemDescription="This involves duplicating software components, such as databases, application servers, and web servers, to ensure that if one component fails, another can take its place."
    />

    <ListItem
      itemLabel="Data redundancy: "
      itemDescription="This involves storing multiple copies of critical data, so that if one copy is lost or corrupted, another copy can be used to restore the system to its previous state."
    />

    <ListItem
      itemLabel="Network redundancy: "
      itemDescription="This involves duplicating network components, such as routers, switches, and firewalls, to ensure that if one component fails, another can take its place, without interrupting the operation of the system."
    />

    <Paragraph>
      Redundancy architecture can improve system reliability and availability, but it also comes
      with some drawbacks, such as increased cost, complexity, and maintenance requirements.
      Therefore, redundancy architecture is typically used in mission-critical systems, where
      downtime can result in significant financial or other losses.
    </Paragraph>

    <Paragraph>
      Overall, redundancy architecture is an important aspect of building reliable and resilient
      software systems, and it is essential to carefully consider the trade-offs between redundancy
      and cost when designing and implementing these systems.
    </Paragraph>
  </>
);

export default RedundancyBasedArchitecture;
