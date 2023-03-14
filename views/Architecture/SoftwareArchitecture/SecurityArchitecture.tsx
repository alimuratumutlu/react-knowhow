import { ListItem, Paragraph } from '@components';

const SecurityArchitecture = (
  <>
    <Paragraph>
      Security architecture is the practice of designing and implementing security controls and
      measures to protect software systems, data, and users from security threats and attacks. It
      involves identifying security risks and vulnerabilities, and designing and implementing
      measures to mitigate them.
    </Paragraph>
    <Paragraph>Some important aspects of security architecture include:</Paragraph>

    <ListItem
      itemLabel="🔐 Security requirements: "
      itemDescription="Security requirements describe the security measures that a system must implement to protect data and users from security threats and attacks. Security requirements should be defined before the design and development process begins, and should be used to guide the design and implementation of the system."
    />
    <ListItem
      itemLabel="🔐 Security controls: "
      itemDescription="Security controls are measures that are implemented to protect the system from security threats and attacks. Security controls can be implemented at the system, network, and application layers."
    />
    <ListItem
      itemLabel="🔐 Access controls: "
      itemDescription="Access controls include measures such as authentication, authorization, and access policies to ensure that only authorized users have access to system resources and data."
    />
    <ListItem
      itemLabel="🔐 Encryption: "
      itemDescription="Encryption involves the use of cryptographic algorithms to protect sensitive data and communication channels from unauthorized access and interception."
    />

    <ListItem
      itemLabel="🔐 Data protection: "
      itemDescription="Data protection includes measures such as data masking, data encryption, and data obfuscation to protect sensitive data from unauthorized access and disclosure."
    />
    <ListItem
      itemLabel="🔐 Firewalls and network security: "
      itemDescription="Firewalls and network security measures include network segmentation, intrusion detection and prevention, and other measures to protect the system from external attacks."
    />
    <ListItem
      itemLabel="🔐 Application security: "
      itemDescription="Application security includes measures such as secure coding practices, input validation, and session management to protect applications from common security threats such as cross-site scripting and SQL injection."
    />
    <ListItem
      itemLabel="🔐 Incident response: "
      itemDescription="Incident response involves preparing for and responding to security incidents such as data breaches and other security threats."
    />
    <Paragraph>
      Overall, security architecture is an essential component of any software system, and requires
      a holistic and proactive approach to identifying and mitigating security risks and threats. It
      involves understanding the security requirements of the system and its users, and designing
      and implementing security controls and measures to meet those requirements.
    </Paragraph>
  </>
);

export default SecurityArchitecture;
