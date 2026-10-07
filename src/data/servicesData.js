export const serviceCategories = [
  {
    id: "it-infrastructure",
    slug: "it-infrastructure",
    title: "IT Infrastructure",
    shortTitle: "IT Infrastructure",
    path: "/services/it-infrastructure",
    icon: "icon-server",
    image: "/assets/images/services/services-2-2.jpg",
    tagline: "Resilient, High-Performance IT Infrastructure & Compute Architectures",
    description1: "NAPSE designs, builds, and optimizes mission-critical IT infrastructure for enterprises across the UAE. We eliminate technical debt and downtime through modern compute architectures, agile virtualization, high-availability storage, and comprehensive disaster recovery.",
    description2: "Whether consolidating sprawling legacy hardware into high-density converged systems or setting up a turnkey enterprise server room, our certified infrastructure engineers provide end-to-end guidance from architectural blueprints to ongoing lifecycle support.",
    tabs: [
      {
        id: "server-solutions",
        slug: "server-solutions",
        title: "Server Solutions",
        tagline: "High-Density Rack, Tower & Modular Blade Server Architectures",
        summary: "Enterprise compute architectures powered by Dell PowerEdge, HPE ProLiant, and Cisco UCS for mission-critical workloads.",
        description1: "Modern applications demand dependable, scalable processing power. NAPSE supplies, configures, and manages high-density compute systems tailored to high-transaction databases, enterprise ERPs, and virtualization clusters.",
        description2: "From single-socket entry servers to quad-socket enterprise clusters, our engineers optimize CPU core density, error-correcting memory (ECC RAM), redundant power supplies, and remote IPMI/iDRAC management for continuous operation.",
        image: "/assets/images/services/services-2-1.jpg",
        capabilitiesTitle: "Server Engineering Capabilities",
        capabilitiesDesc: "Built to deliver continuous uptime, hardware redundancy, and long-term compute scalability.",
        capabilities: [
          "Rackmount (1U, 2U, 4U) and high-density modular blade chassis deployment",
          "Hardware RAID arrays with battery-backed write cache & hot-spares",
          "Automated out-of-band remote server management (iDRAC / iLO)",
          "Dual redundant hot-swappable power supplies & high-efficiency cooling"
        ],
        faqs: [
          {
            q: "How do you size servers for our business requirements?",
            a: "We assess your current compute, memory, and IOPS requirements, factoring in 3 to 5 years of projected business growth to recommend cost-effective hardware configurations."
          },
          {
            q: "Do you supply servers with original manufacturer warranties?",
            a: "Yes, all servers are supplied with official Tier-1 OEM warranties (Dell ProSupport, HPE Pointnext) with next-business-day or 4-hour on-site mission-critical coverage across the UAE."
          },
          {
            q: "Can you migrate workloads from our old servers to the new ones?",
            a: "Yes, we handle complete physical-to-virtual (P2V) and bare-metal migration with strict zero-data-loss validation and scheduled cutovers."
          }
        ]
      },
      {
        id: "storage-solutions",
        slug: "storage-solutions",
        title: "Storage Solutions",
        tagline: "High-Throughput Enterprise SAN, NAS & Unified Storage Systems",
        summary: "Scalable data storage arrays offering sub-millisecond latency, automated tiering, and high data protection.",
        description1: "Data is the lifeblood of modern enterprise. NAPSE delivers advanced Storage Area Networks (SAN) and Network Attached Storage (NAS) engineered for massive scale, IOPS intensive workloads, and unified multi-protocol access.",
        description2: "Partnering with NetApp, Dell Unity, Synology, and HPE, we provide all-flash and hybrid storage arrays that seamlessly balance ultra-fast NVMe throughput with cost-efficient secondary archiving.",
        image: "/assets/images/services/services-2-2.jpg",
        capabilitiesTitle: "Storage Architecture Capabilities",
        capabilitiesDesc: "Ensuring zero data bottlenecks and high data integrity for corporate file shares, VMs, and databases.",
        capabilities: [
          "High-performance All-Flash and Hybrid SAN/NAS storage arrays",
          "Fibre Channel (FC), iSCSI & NFS/SMB multi-protocol storage networking",
          "Inline hardware data deduplication, compression & thin provisioning",
          "Non-disruptive capacity expansion with hot-swappable disk enclosures"
        ],
        faqs: [
          {
            q: "Can we expand storage capacity without shutting down production servers?",
            a: "Yes, our enterprise storage solutions feature hot-swappable drive expansion and dynamic volume expansion without any scheduled system downtime."
          },
          {
            q: "How does storage deduplication save on licensing and drive costs?",
            a: "Inline deduplication and compression eliminate redundant blocks across VMs and files, frequently achieving 3:1 to 5:1 data reduction ratios."
          }
        ]
      },
      {
        id: "data-center-solutions",
        slug: "data-center-solutions",
        title: "Data Center Solutions",
        tagline: "High-Density Data Center Racks, Power Distribution & Colocation",
        summary: "Turnkey enterprise data center facilities, precision airflow cooling, and smart PDU infrastructure across the UAE.",
        description1: "A world-class data center requires precision engineering across power, cooling, cabling, and monitoring. NAPSE provides turnkey design and fit-out of on-premise data center rooms and colocation suites.",
        description2: "We integrate raised flooring, cold/hot aisle containment, modular UPS battery backup systems, and real-time environmental telemetry (temperature, humidity, water leak, and fire suppression).",
        image: "/assets/images/services/services-details-img-2.jpg",
        capabilitiesTitle: "Data Center Capabilities",
        capabilitiesDesc: "Building resilient physical ecosystems that protect critical compute hardware from environmental stress.",
        capabilities: [
          "Turnkey 42U/48U high-density server racking & structured containment",
          "Smart Power Distribution Units (PDUs) with remote per-port energy monitoring",
          "Precision In-Row & Perimeter Air Conditioning (PAC/CRAC) integration",
          "Environmental sensor matrices with automated SMS/email alert triggers"
        ],
        faqs: [
          {
            q: "Do your data center designs follow international standards?",
            a: "Yes, our designs align with TIA-942 and Uptime Institute Tier II and Tier III redundancy topologies."
          }
        ]
      },
      {
        id: "virtualization",
        slug: "virtualization",
        title: "Virtualization",
        tagline: "Hypervisor Virtualization, Resource Pooling & Software-Defined Compute",
        summary: "Maximize hardware utilization and agility with VMware vSphere, Microsoft Hyper-V, and open virtualization clusters.",
        description1: "Virtualization transforms physical hardware into elastic resource pools. NAPSE helps enterprises consolidate server footprints, reduce power consumption, and deploy new virtual servers in minutes.",
        description2: "We design resilient hypervisor clusters with automated failover (HA), dynamic resource balancing (DRS), and software-defined networking that guarantee continuous application availability even during host hardware failures.",
        image: "/assets/images/services/services-2-4.jpg",
        capabilitiesTitle: "Virtualization Capabilities",
        capabilitiesDesc: "Empowering your IT team with dynamic resource management and seamless VM provisioning.",
        capabilities: [
          "VMware vSphere ESXi & vCenter deployment and cluster optimization",
          "Microsoft Hyper-V failover clustering with storage spaces direct",
          "Live VM migration (vMotion) with zero dropped network connections",
          "Virtual machine snapshot management & resource quotas"
        ],
        faqs: [
          {
            q: "How many physical servers can be consolidated using virtualization?",
            a: "Typically, organizations achieve consolidation ratios of 10:1 to 20:1, drastically reducing hardware footprint, cooling, and power costs."
          }
        ]
      },
      {
        id: "backup-disaster-recovery",
        slug: "backup-disaster-recovery",
        title: "Backup & Disaster Recovery",
        tagline: "Immutable Backups, Off-Site Cloud Replication & Fast RPO/RTO Recovery",
        summary: "Protect corporate data against ransomware, hardware crashes, and disasters with automated backup and failover routines.",
        description1: "Data loss can permanently cripple an enterprise. NAPSE implements comprehensive Business Continuity and Disaster Recovery (BCDR) architectures following the 3-2-1 backup rule.",
        description2: "Utilizing Veeam, Acronis, and Commvault, we configure immutable backup repositories that defend against ransomware encryption, coupled with continuous cloud replication for rapid recovery time objectives (RTO).",
        image: "/assets/images/services/services-2-3.jpg",
        capabilitiesTitle: "BCDR Capabilities",
        capabilitiesDesc: "Ensuring your business can recover rapidly and cleanly from any catastrophic failure or cyberattack.",
        capabilities: [
          "Immutable, write-once-read-many (WORM) ransomware-proof backups",
          "Near-instant VM boot from backup storage for sub-15-minute RTO",
          "Automated offsite replication to secure UAE cloud repositories",
          "Scheduled automated disaster recovery failover drill testing"
        ],
        faqs: [
          {
            q: "How do immutable backups protect against ransomware?",
            a: "Immutable backups cannot be altered, encrypted, or deleted by any user or malware payload for a predetermined retention period, guaranteeing clean restore points."
          }
        ]
      }
    ]
  },
  {
    id: "networking-security",
    slug: "networking-security",
    title: "Networking & Security",
    shortTitle: "Networking & Security",
    path: "/services/networking-security",
    icon: "icon-technology",
    image: "/assets/images/services/services-2-3.jpg",
    tagline: "High-Throughput Enterprise Switching, Routing & Perimeter Defense",
    description1: "A fast, resilient, and secure network is the nervous system of modern enterprise operations. NAPSE engineers high-bandwidth corporate network architectures that eliminate bottlenecks and protect every network segment against intrusion.",
    description2: "Partnering with Cisco, Aruba, Fortinet, and Juniper, we configure high-throughput switching, secure branch SD-WAN interconnects, high-density Wi-Fi 6/7 networks, and Next-Generation Firewalls that inspect traffic without latency.",
    tabs: [
      {
        id: "network-infrastructure",
        slug: "network-infrastructure",
        title: "Network Infrastructure",
        tagline: "End-to-End Enterprise Network Architecture & Backbone Design",
        summary: "Resilient LAN and WAN foundations delivering high bandwidth and low latency across all business operations.",
        description1: "We engineer structured network backbones for corporate headquarters, branches, and retail networks, ensuring robust performance for high-volume enterprise traffic.",
        description2: "From multi-gigabit copper interconnects to single-mode fiber links, our network designs ensure seamless connectivity and redundant uplinks.",
        image: "/assets/images/services/services-2-3.jpg",
        capabilitiesTitle: "Network Infrastructure Strengths",
        capabilitiesDesc: "High-capacity network backbones engineered for 99.999% availability.",
        capabilities: [
          "Campus LAN architecture & high-bandwidth optical uplinks",
          "Multi-branch WAN connectivity & carrier-grade routing",
          "Redundant core routing protocols (BGP, OSPF, EIGRP)",
          "Network traffic QoS prioritization for voice and video"
        ],
        faqs: [
          {
            q: "Can you upgrade our network without interrupting working hours?",
            a: "Yes, our team performs hardware cutovers and configuration migrations during scheduled maintenance windows over weekends or evenings."
          }
        ]
      },
      {
        id: "switching-routing",
        slug: "switching-routing",
        title: "Switching & Routing",
        tagline: "Core, Distribution & Access Layer Switching with Intelligent Routing",
        summary: "High-throughput managed switches from Cisco, Aruba, and Fortinet with VLAN segmentation and PoE+ power delivery.",
        description1: "Efficient traffic forwarding begins with intelligent switching. We deploy stackable enterprise switches providing multi-gigabit throughput to every desk and access point.",
        description2: "With strict 802.1Q VLAN segmentation, Layer-3 routing, and port security policies, we ensure guest, corporate, VoIP, and IoT traffic remain cleanly isolated.",
        image: "/assets/images/services/services-details-img-3.jpg",
        capabilitiesTitle: "Switching & Routing Capabilities",
        capabilitiesDesc: "Enterprise switching built for high-throughput traffic and power-over-ethernet devices.",
        capabilities: [
          "Layer 2 and Layer 3 managed switching with wire-speed forwarding",
          "PoE+ and UPoE power delivery for IP phones, cameras, and Wi-Fi APs",
          "Switch virtualization, stacking, and link aggregation (LACP)",
          "Access Control Lists (ACLs) and dynamic 802.1X port authentication"
        ],
        faqs: [
          {
            q: "What brands of enterprise switches do you support?",
            a: "We are authorized deployment partners for Cisco Catalyst, Aruba CX, Fortinet FortiSwitch, and Juniper Networks."
          }
        ]
      },
      {
        id: "wi-fi-solutions",
        slug: "wi-fi-solutions",
        title: "Wi-Fi Solutions",
        tagline: "Enterprise Wi-Fi 6 & 6E/7 Deployments with Active RF Survey Heatmaps",
        summary: "Zero-deadzone wireless connectivity with seamless roaming, high client density, and secure guest access portals.",
        description1: "Modern offices need pervasive, high-speed Wi-Fi. NAPSE conducts professional RF heatmapping to eliminate deadzones, channel interference, and latency spikes.",
        description2: "We deploy cloud-managed access points (Cisco Meraki, Aruba, Ruckus) supporting hundreds of concurrent client connections with WPA3 enterprise security.",
        image: "/assets/images/services/services-details-img-4.jpg",
        capabilitiesTitle: "Wireless Capabilities",
        capabilitiesDesc: "Fast, reliable, and secure wireless environments for enterprise teams and visitors.",
        capabilities: [
          "On-site pre- and post-deployment RF spectrum analysis & heatmapping",
          "High-density Wi-Fi 6/7 access points with fast seamless 802.11r roaming",
          "Branded captive guest Wi-Fi portals with SMS/OTP authentication",
          "Centralized cloud controller management & AI wireless troubleshooting"
        ],
        faqs: [
          {
            q: "Can you fix dropped calls and poor Wi-Fi roaming in our office?",
            a: "Yes, our RF spectrum surveys identify overlapping frequencies and signal bleed, allowing us to calibrate channel widths and transmit power for seamless handoffs."
          }
        ]
      },
      {
        id: "firewall-solutions",
        slug: "firewall-solutions",
        title: "Firewall Solutions",
        tagline: "Next-Generation Firewalls (NGFW) with Deep SSL Inspection & Sandboxing",
        summary: "Fortinet, Palo Alto, and Cisco firewalls delivering line-rate threat prevention, application control, and IPsec VPNs.",
        description1: "Traditional port firewalls are obsolete against modern web threats. NAPSE deploys Next-Generation Firewalls (NGFW) that inspect SSL/TLS encrypted application traffic in real time.",
        description2: "We enforce granular application control, web category filtering, anti-botnet protection, and secure SSL/IPsec VPN access for remote workforces.",
        image: "/assets/images/services/services-details-img-1.jpg",
        capabilitiesTitle: "Firewall Capabilities",
        capabilitiesDesc: "Hardware-accelerated perimeter protection designed for heavy encrypted traffic loads.",
        capabilities: [
          "High-availability (Active/Passive & Active/Active) firewall clustering",
          "Full SSL/TLS deep packet inspection without bandwidth throttling",
          "Integrated intrusion prevention (IPS) & cloud sandbox file detonation",
          "Zero-Trust Network Access (ZTNA) & clientless remote VPN access"
        ],
        faqs: [
          {
            q: "Which firewall vendor is recommended for UAE businesses?",
            a: "Fortinet FortiGate and Palo Alto Networks are top tier recommendations, providing robust local threat intelligence and UAE compliance."
          }
        ]
      },
      {
        id: "network-security",
        slug: "network-security",
        title: "Network Security",
        tagline: "Internal Micro-Segmentation, Network Access Control & Threat Isolation",
        summary: "Defend against lateral movement with 802.1X NAC, micro-segmentation, and continuous traffic anomaly auditing.",
        description1: "Securing the perimeter is no longer enough; threats inside the network must be isolated instantly. NAPSE implements Zero-Trust network segmentation.",
        description2: "We configure Network Access Control (NAC) to verify every connected device's security posture before granting network access, preventing rogue hardware intrusions.",
        image: "/assets/images/services/services-2-4.jpg",
        capabilitiesTitle: "Network Security Strengths",
        capabilitiesDesc: "Ensuring unauthorized devices cannot access critical production networks.",
        capabilities: [
          "Dynamic Network Access Control (Cisco ISE / Aruba ClearPass)",
          "Internal network micro-segmentation preventing lateral malware spread",
          "Automated rogue DHCP and ARP spoofing defense protocols",
          "Real-time NetFlow telemetry & anomaly detection"
        ],
        faqs: [
          {
            q: "How does micro-segmentation protect against ransomware?",
            a: "If a single endpoint is compromised, micro-segmentation prevents the ransomware from scanning or accessing other workstations or server subnets."
          }
        ]
      },
      {
        id: "cybersecurity-solutions",
        slug: "cybersecurity-solutions",
        title: "Cybersecurity Solutions",
        tagline: "Proactive EDR/XDR, 24/7 SOC Telemetry & Vulnerability Auditing",
        summary: "Multi-layered cyber defense, endpoint detection and response (EDR), penetration testing, and UAE NESA compliance.",
        description1: "NAPSE shields corporate systems from ransomware, phishing, and zero-day exploits. We deploy modern EDR/XDR solutions backed by 24/7 security monitoring.",
        description2: "Our security analysts conduct regular Vulnerability Assessments and Penetration Testing (VAPT) to pinpoint vulnerabilities before attackers can exploit them.",
        image: "/assets/images/services/services-details-img-1.jpg",
        capabilitiesTitle: "Cyber Defense Capabilities",
        capabilitiesDesc: "Proactive threat hunting and automated containment around the clock.",
        capabilities: [
          "Managed Endpoint Detection & Response (EDR/XDR) with behavioral containment",
          "Vulnerability Assessment & Penetration Testing (VAPT) for networks and web apps",
          "AI email security protecting against spear-phishing & business email compromise",
          "Compliance alignment with UAE NESA and Dubai ISR standards"
        ],
        faqs: [
          {
            q: "How quickly do you respond to a detected ransomware incident?",
            a: "Our automated EDR isolates infected hosts within seconds, and our incident response team initiates triage within 15 minutes."
          }
        ]
      }
    ]
  },
  {
    id: "it-hardware-procurement",
    slug: "it-hardware-procurement",
    title: "IT Hardware & Procurement",
    shortTitle: "IT Hardware & Procurement",
    path: "/services/it-hardware-procurement",
    icon: "icon-mobile-development",
    image: "/assets/images/services/services-2-1.jpg",
    tagline: "Authorized Tier-1 OEM Sourcing, Enterprise Hardware & Local Logistics",
    description1: "Hardware procurement in the UAE requires authentic OEM relationships, transparent pricing, and fast local delivery. NAPSE provides businesses with complete hardware sourcing across all computing, storage, and networking categories.",
    description2: "We partner directly with HP, Dell Technologies, Lenovo, Apple, Cisco, and Asus to source genuine hardware backed by official manufacturer warranties and local service agreements.",
    tabs: [
      {
        id: "servers-workstations",
        slug: "servers-workstations",
        title: "Servers & Workstations",
        tagline: "Precision Engineering Towers, Rack Servers & High-Performance GPUs",
        summary: "High-power towers and rack workstations for CAD design, video rendering, AI modeling, and enterprise compute.",
        description1: "Equip your power users with certified workstations designed for heavy computational workloads. We configure custom GPU, RAM, and NVMe drives to handle demanding software seamlessly.",
        description2: "From Dell Precision and HP Z-series to Lenovo ThinkStation systems, every machine undergoes thorough pre-delivery diagnostic testing.",
        image: "/assets/images/services/services-2-1.jpg",
        capabilitiesTitle: "Workstation Sourcing Strengths",
        capabilitiesDesc: "Engineered for maximum reliability under 100% continuous compute loads.",
        capabilities: [
          "HP Z-Series, Dell Precision & Lenovo ThinkStation authorized sourcing",
          "Dedicated NVIDIA RTX professional workstation GPU configurations",
          "Pre-configured RAID NVMe storage arrays for high-speed scratch disks",
          "Dual Intel Xeon or AMD Threadripper multi-threaded processor options"
        ],
        faqs: [
          {
            q: "Do you supply ISV certified workstations for AutoCAD and Revit?",
            a: "Yes, our workstations carry official Independent Software Vendor (ISV) certifications for Autodesk, Adobe, SolidWorks, and Bentley."
          }
        ]
      },
      {
        id: "laptops-desktops",
        slug: "laptops-desktops",
        title: "Laptops & Desktops",
        tagline: "Standardized Corporate Fleets with Custom Asset Tagging & Imaging",
        summary: "Bulk procurement of business-class laptops (Dell Latitude, HP EliteBook, Lenovo ThinkPad) and compact desktop PCs.",
        description1: "Fleet standardization streamlines IT maintenance and enhances user experience. We supply authorized commercial-grade laptops and desktops built for durable business use.",
        description2: "Unlike retail consumer models, our enterprise PCs feature magnesium alloys, military-grade drop testing, TPM 2.0 security chips, and 3-year on-site warranties.",
        image: "/assets/images/services/services-2-2.jpg",
        capabilitiesTitle: "Fleet Sourcing Capabilities",
        capabilitiesDesc: "Fast rollout of corporate laptops and desktops configured to your specifications.",
        capabilities: [
          "Authorized Dell Latitude, HP EliteBook & Lenovo ThinkPad fleets",
          "Apple MacBooks & Mac mini corporate deployment with Apple Business Manager",
          "Custom pre-imaging, BIOS password hardening & asset barcode tagging",
          "Flexible bulk purchasing and commercial credit terms for corporate accounts"
        ],
        faqs: [
          {
            q: "Can NAPSE deliver laptops pre-configured with our corporate Windows image?",
            a: "Yes, our UAE staging facility can clone your master golden image and configure domain settings prior to site delivery."
          }
        ]
      },
      {
        id: "storage-backup-hardware",
        slug: "storage-backup-hardware",
        title: "Storage & Backup Hardware",
        tagline: "Enterprise Hard Drives, Tape Libraries, NAS Enclosures & Expansion Shelves",
        summary: "High-capacity enterprise drives, Synology/QNAP NAS appliances, and LTO tape backup systems.",
        description1: "We supply certified enterprise storage disks (SAS, SATA, NVMe), hot-swap controllers, and dedicated NAS backup appliances from leading vendors.",
        description2: "All drives are official enterprise-grade models with 2-million-hour MTBF ratings, ensuring reliable 24/7 duty cycles.",
        image: "/assets/images/services/services-details-img-6.jpg",
        capabilitiesTitle: "Storage Hardware Sourcing",
        capabilitiesDesc: "Ensuring storage availability and replacement parts without supply chain delays.",
        capabilities: [
          "Enterprise 12Gb/s SAS and NVMe U.2/U.3 solid-state replacement drives",
          "Multi-bay Synology and QNAP rackmount NAS backup servers",
          "LTO-8 and LTO-9 tape automation drives and certified media cartridges",
          "Expansion shelves (JBOD) for Dell, HPE, and NetApp systems"
        ],
        faqs: [
          {
            q: "Can you supply certified replacement drives for older servers?",
            a: "Yes, we source authentic OEM spare parts and replacement drives with genuine firmware for legacy hardware."
          }
        ]
      },
      {
        id: "networking-equipment",
        slug: "networking-equipment",
        title: "Networking Equipment",
        tagline: "Enterprise Routers, Switches, Firewalls, SFP Modules & Patch Panels",
        summary: "Genuine networking components from Cisco, Fortinet, Aruba, and Mikrotik with full vendor warranty coverage.",
        description1: "Avoid grey-market hardware risks. NAPSE delivers 100% authentic networking hardware directly from authorized UAE distributor channels.",
        description2: "We supply switches, routers, optical SFP+ transceivers, structured cabling patch panels, and rack accessories with verified serial numbers.",
        image: "/assets/images/services/services-details-img-3.jpg",
        capabilitiesTitle: "Networking Sourcing Capabilities",
        capabilitiesDesc: "Authentic networking hardware backed by official manufacturer warranties.",
        capabilities: [
          "Official distributor channel sourcing with genuine warranty registration",
          "Original Cisco, Aruba, and Fortinet optical 10G/25G/40G/100G transceivers",
          "Cat6A and Cat7 high-density copper patch panels & fiber patch boxes",
          "Managed power distribution units (PDUs) & rack-mount cable organizers"
        ],
        faqs: [
          {
            q: "How can we verify that the networking equipment is genuine?",
            a: "Every unit we supply is registered directly with the OEM manufacturer's portal, verifying serial authenticity and warranty entitlement."
          }
        ]
      },
      {
        id: "it-accessories-peripherals",
        slug: "it-accessories-peripherals",
        title: "IT Accessories & Peripherals",
        tagline: "Monitors, Ergonomic Docking Stations, Webcams & Office Peripherals",
        summary: "Complete office workstation accessories, high-resolution 4K monitors, wireless keyboards, and multi-display docks.",
        description1: "Boost workplace productivity with reliable peripherals. We supply premium 4K USB-C displays, universal Thunderbolt docking stations, and ergonomic wireless peripherals.",
        description2: "We stock products from Dell, HP, Logitech, and Kensington to ensure smooth day-to-day office computing.",
        image: "/assets/images/services/services-details-img-4.jpg",
        capabilitiesTitle: "Peripherals Sourcing",
        capabilitiesDesc: "Ensuring employees have the right ergonomic tools to work efficiently.",
        capabilities: [
          "Dell and HP UltraSharp 4K/QHD USB-C hub monitors with power delivery",
          "Thunderbolt 4 universal docking stations for Windows and Mac",
          "Logitech commercial wireless keyboard and mouse combos",
          "Enterprise webcams and noise-cancelling conference headsets"
        ],
        faqs: [
          {
            q: "Do you supply dual-monitor desk arms and cable management kits?",
            a: "Yes, we provide complete desk accessory packages including dual-screen pneumatic monitor arms and under-desk cable management."
          }
        ]
      },
      {
        id: "hardware-sourcing-procurement",
        slug: "hardware-sourcing-procurement",
        title: "Hardware Sourcing & Procurement",
        tagline: "Global Supply Chain Logistics, Bulk Sourcing & Expedited Delivery",
        summary: "Navigating hardware lead times with priority channel access, bulk enterprise pricing, and UAE warehousing.",
        description1: "Global supply chain bottlenecks shouldn't delay your technology rollouts. NAPSE manages end-to-end procurement, customs clearance, and local warehousing in the UAE.",
        description2: "We negotiate bulk tier discounts with global distributors and maintain buffer stock in our local facilities for fast client dispatch.",
        image: "/assets/images/services/services-details-img-6.jpg",
        capabilitiesTitle: "Procurement Strengths",
        capabilitiesDesc: "Streamlined logistics that deliver authentic equipment on schedule.",
        capabilities: [
          "Priority allocation from authorized Tier-1 international distributors",
          "Handling UAE customs clearance, import documentation, and freight",
          "Local warehousing and staggered deployment staging in the UAE",
          "Single-invoice vendor consolidation for all IT hardware purchases"
        ],
        faqs: [
          {
            q: "Can NAPSE handle procurement for projects across multiple Emirates?",
            a: "Yes, we deliver and stage hardware across Abu Dhabi, Dubai, Sharjah, and all other Emirates with coordinated on-site delivery."
          }
        ]
      }
    ]
  },
  {
    id: "software-licensing",
    slug: "software-licensing",
    title: "Software & Licensing",
    shortTitle: "Software & Licensing",
    path: "/services/software-licensing",
    icon: "icon-data-analytics",
    image: "/assets/images/services/services-2-4.jpg",
    tagline: "Genuine Enterprise Licensing, Cloud Subscriptions & Asset Auditing",
    description1: "Managing enterprise software licenses can be confusing and costly. NAPSE acts as your trusted licensing advisory, ensuring 100% authentic licenses, optimal tiering, and full regulatory compliance.",
    description2: "As a certified partner for Microsoft, VMware, Oracle, Adobe, and Red Hat, we help organizations eliminate over-licensing waste while protecting against vendor audit penalties.",
    tabs: [
      {
        id: "microsoft-licensing",
        slug: "microsoft-licensing",
        title: "Microsoft Licensing",
        tagline: "Microsoft 365, Windows Server, SQL Server & CSP Subscription Management",
        summary: "Optimize Microsoft licensing expenditure with certified Cloud Solution Provider (CSP) agreements and volume licensing.",
        description1: "We help organizations navigate Microsoft licensing rules, ensuring you buy only what you need across Microsoft 365, Office 365, and Azure.",
        description2: "From Business Standard and E3/E5 licenses to Windows Server cores and SQL Server per-core licenses, we provide transparent monthly or annual billing.",
        image: "/assets/images/services/services-2-4.jpg",
        capabilitiesTitle: "Microsoft Licensing Capabilities",
        capabilitiesDesc: "Cost-optimized Microsoft agreements tailored to your actual feature utilization.",
        capabilities: [
          "Microsoft Cloud Solution Provider (CSP) tier-1 direct billing",
          "Microsoft 365 Business, Enterprise E3/E5 & security add-on licensing",
          "Windows Server and SQL Server core-based licensing advisory",
          "User license optimization to eliminate dormant account billing"
        ],
        faqs: [
          {
            q: "How can we reduce our monthly Microsoft 365 subscription costs?",
            a: "We audit your tenant to identify unassigned licenses, downgrade accounts that only need web apps, and eliminate redundant third-party add-ons."
          }
        ]
      },
      {
        id: "server-virtualization-licensing",
        slug: "server-virtualization-licensing",
        title: "Server & Virtualization Licensing",
        tagline: "VMware vSphere, Red Hat Enterprise Linux & Hyper-V Licensing",
        summary: "Authorized licensing for hypervisors, server operating systems, and high-availability virtualization clusters.",
        description1: "Virtualization licensing rules have evolved significantly. NAPSE ensures your VMware, Hyper-V, and Red Hat clusters are licensed legally and cost-effectively.",
        description2: "We assist with the transition to per-core subscription models and recommend alternative open hypervisors where appropriate.",
        image: "/assets/images/services/services-details-img-2.jpg",
        capabilitiesTitle: "Virtualization Licensing",
        capabilitiesDesc: "Ensuring full compliance and support entitlements for enterprise hypervisors.",
        capabilities: [
          "VMware vSphere Standard & Foundation per-core subscription licensing",
          "Red Hat Enterprise Linux (RHEL) server and workstation subscriptions",
          "Windows Server Datacenter licensing for unlimited virtual machines",
          "Cluster license mapping and renewal anniversary synchronization"
        ],
        faqs: [
          {
            q: "How do the new VMware per-core licensing rules impact our clusters?",
            a: "We calculate exact physical core counts per host and help you size subscriptions to avoid purchasing unnecessary licensing capacity."
          }
        ]
      },
      {
        id: "security-software",
        slug: "security-software",
        title: "Security Software",
        tagline: "Antivirus, EDR, Email Gateway, PAM & Backup Software Licensing",
        summary: "Genuine security software subscriptions from CrowdStrike, SentinelOne, Fortinet, Veeam, and Acronis.",
        description1: "Protect your enterprise endpoints with authentic, vendor-supported security software licenses. We supply centralized management consoles for all security software.",
        description2: "We handle license key provisioning, multi-tenant portal setup, and co-terming renewals so your entire security suite renews on a single schedule.",
        image: "/assets/images/services/services-details-img-1.jpg",
        capabilitiesTitle: "Security Software Sourcing",
        capabilitiesDesc: "Industry-leading cyber protection tools licensed directly under your tenant.",
        capabilities: [
          "CrowdStrike, SentinelOne & Microsoft Defender for Endpoint licensing",
          "Veeam Data Platform and Acronis Cyber Protect backup licenses",
          "SpamTitan & Proofpoint advanced email security gateways",
          "Password manager & Privileged Access Management (PAM) software"
        ],
        faqs: [
          {
            q: "Can security software be purchased on monthly subscription terms?",
            a: "Yes, many of our security software suites are available on flexible monthly pay-as-you-go or discounted annual multi-year plans."
          }
        ]
      },
      {
        id: "enterprise-software",
        slug: "enterprise-software",
        title: "Enterprise Software",
        tagline: "Database, Creative Suite, CAD & Business Application Licensing",
        summary: "Oracle, Adobe Creative Cloud, Autodesk, and ERP application licenses procured with maximum partner discounts.",
        description1: "Ensure legal compliance across engineering and design teams. We supply Adobe Creative Cloud for Teams, Autodesk Architecture/Engineering suites, and database software.",
        description2: "We verify user seat assignments and ensure your organization maintains certified proof of purchase documentation.",
        image: "/assets/images/services/services-details-img-5.jpg",
        capabilitiesTitle: "Enterprise Software Sourcing",
        capabilitiesDesc: "Authorized distribution for industry-standard business and engineering software.",
        capabilities: [
          "Adobe Creative Cloud for Teams & Enterprise VIP agreements",
          "Autodesk AutoCAD, Revit & AEC collection named-user subscriptions",
          "Oracle Database Standard & Enterprise edition licensing",
          "Remote desktop, TeamViewer & AnyDesk commercial enterprise licenses"
        ],
        faqs: [
          {
            q: "Can we reassign Adobe and Autodesk licenses when staff change?",
            a: "Yes, our named-user portal makes it easy for your administrator to revoke and reassign licenses instantly to new team members."
          }
        ]
      },
      {
        id: "license-procurement-management",
        slug: "license-procurement-management",
        title: "License Procurement & Management",
        tagline: "Software Asset Management (SAM) & License Compliance Defense",
        summary: "Avoid expensive vendor fines with complete software asset audits, contract co-terming, and license lifecycle governance.",
        description1: "Software audits by major vendors can result in costly penalties. NAPSE's Software Asset Management (SAM) audits reconcile your deployed software against purchase records.",
        description2: "We identify compliance gaps, remove unapproved software, and provide certified documentation to ensure you pass vendor audits with confidence.",
        image: "/assets/images/services/services-details-img-6.jpg",
        capabilitiesTitle: "SAM Capabilities",
        capabilitiesDesc: "Eliminating software legal risks while synchronizing renewal contract timelines.",
        capabilities: [
          "Comprehensive Software Asset Management (SAM) inventory discovery",
          "Consolidation of fragmented software renewals into unified co-termed dates",
          "Guidance and representation during software vendor compliance reviews",
          "Cost analysis for migrating on-premise perpetual licenses to cloud SaaS"
        ],
        faqs: [
          {
            q: "What should we do if we receive a software audit letter?",
            a: "Contact NAPSE immediately. We conduct a pre-audit inventory, resolve licensing gaps, and guide your response to avoid inflated vendor claims."
          }
        ]
      }
    ]
  },
  {
    id: "cloud-solutions",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortTitle: "Cloud Solutions",
    path: "/services/cloud-solutions",
    icon: "icon-cloud-server",
    image: "/assets/images/services/services-details-img-2.jpg",
    tagline: "Public, Private & Hybrid Cloud Architectures with Local UAE Data Residency",
    description1: "Cloud computing provides agility, elasticity, and global reach. NAPSE empowers UAE businesses with smooth cloud adoption, zero-downtime migrations, and ongoing cloud cost optimization.",
    description2: "Whether utilizing Microsoft Azure, Amazon Web Services (AWS), Google Cloud, or localized UAE cloud data centers, we architect resilient systems that balance performance with predictable monthly budgets.",
    tabs: [
      {
        id: "cloud-infrastructure",
        slug: "cloud-infrastructure",
        title: "Cloud Infrastructure",
        tagline: "IaaS & PaaS Cloud Architectures on Microsoft Azure & AWS",
        summary: "Scalable virtual machines, managed databases, virtual private clouds (VPC), and auto-scaling cloud compute.",
        description1: "We build elastic cloud environments that scale automatically with your traffic. Our cloud architects configure secure virtual networks, load balancers, and cloud storage.",
        description2: "We enforce strict security baselines, identity governance, and automated backup routines to ensure high availability.",
        image: "/assets/images/services/services-details-img-2.jpg",
        capabilitiesTitle: "Cloud Infrastructure Capabilities",
        capabilitiesDesc: "Cloud architectures engineered for high performance, security, and uptime.",
        capabilities: [
          "Azure and AWS Virtual Machine deployment with automated auto-scaling",
          "Virtual Network (VNet/VPC) peering, security groups & cloud firewalls",
          "Managed cloud database hosting (Azure SQL, AWS RDS) with automated backups",
          "Infrastructure as Code (IaC) using Terraform for repeatable environments"
        ],
        faqs: [
          {
            q: "Can our cloud data be hosted strictly within the UAE?",
            a: "Yes, we deploy workloads in Microsoft UAE North (Dubai) and AWS UAE regions to comply with UAE national data residency laws."
          }
        ]
      },
      {
        id: "cloud-migration",
        slug: "cloud-migration",
        title: "Cloud Migration",
        tagline: "Zero-Downtime Server, Database & Application Migration to the Cloud",
        summary: "Phased migration methodology that transitions on-premise infrastructure to cloud environments without business interruption.",
        description1: "Moving to the cloud can seem daunting. NAPSE's cloud migration methodology guarantees a smooth transition with thorough pre-testing and zero data loss.",
        description2: "We synchronize databases and file systems in the background and execute final cutover during non-working hours so your staff experiences no disruption.",
        image: "/assets/images/services/services-2-2.jpg",
        capabilitiesTitle: "Cloud Migration Strengths",
        capabilitiesDesc: "Proven methodologies that eliminate downtime and risk during cloud adoption.",
        capabilities: [
          "Cloud readiness assessment & Total Cost of Ownership (TCO) modeling",
          "Continuous live block-level server replication prior to final cutover",
          "Database migration with zero transaction loss (SQL, Oracle, PostgreSQL)",
          "Post-migration performance tuning and application validation testing"
        ],
        faqs: [
          {
            q: "How long does a typical server migration to Microsoft Azure take?",
            a: "Depending on data size, background synchronization takes a few days, while the final cutover window takes only 1 to 2 hours."
          }
        ]
      },
      {
        id: "microsoft-365",
        slug: "microsoft-365",
        title: "Microsoft 365",
        tagline: "Exchange Online, SharePoint, Teams & Enterprise Security Hardening",
        summary: "Turnkey Microsoft 365 tenant setup, email migration from legacy mail, SharePoint intranet, and Teams collaboration.",
        description1: "Unleash workplace productivity with Microsoft 365. We migrate emails, calendars, and shared folders from cPanel, G Suite, or on-premise Exchange to Microsoft 365.",
        description2: "We configure multi-factor authentication (MFA), Conditional Access, and Data Loss Prevention (DLP) to protect confidential corporate communications.",
        image: "/assets/images/services/services-details-img-4.jpg",
        capabilitiesTitle: "Microsoft 365 Capabilities",
        capabilitiesDesc: "Seamless collaboration with enterprise-grade data protection.",
        capabilities: [
          "Email migration to Exchange Online with zero email loss",
          "SharePoint Online document management & permissions architecture",
          "Microsoft Teams configuration, channels, voice calling & meeting policies",
          "Multi-Factor Authentication (MFA) & Conditional Access security baselines"
        ],
        faqs: [
          {
            q: "Will our historical emails and calendar appointments transfer over?",
            a: "Yes, 100% of emails, sub-folders, contacts, and calendar schedules are migrated intact to your new Microsoft 365 mailboxes."
          }
        ]
      },
      {
        id: "cloud-backup",
        slug: "cloud-backup",
        title: "Cloud Backup",
        tagline: "Automated Cloud-to-Cloud & On-Premise-to-Cloud Data Protection",
        summary: "Backup Microsoft 365 mailboxes, SharePoint, OneDrive, and local servers to encrypted UAE cloud storage.",
        description1: "Microsoft 365 does not natively protect against accidental user deletion or insider sabotage. NAPSE provides automated cloud backup for all Microsoft 365 data.",
        description2: "We take multiple automated snapshots per day with point-in-time recovery, allowing you to restore deleted emails or files in seconds.",
        image: "/assets/images/services/services-2-3.jpg",
        capabilitiesTitle: "Cloud Backup Strengths",
        capabilitiesDesc: "Complete protection for cloud SaaS applications and on-premise systems.",
        capabilities: [
          "Complete Microsoft 365 backup (Exchange, SharePoint, Teams, OneDrive)",
          "Military-grade AES-256 encryption at rest and during transit",
          "Unlimited cloud retention policies for legal and regulatory compliance",
          "Granular single-item search and instant mailbox restoration"
        ],
        faqs: [
          {
            q: "Why do we need a separate backup for Microsoft 365?",
            a: "Microsoft operates on a shared responsibility model: they guarantee platform uptime, but data retention, backup, and recovery remain the customer's responsibility."
          }
        ]
      },
      {
        id: "hybrid-cloud-solutions",
        slug: "hybrid-cloud-solutions",
        title: "Hybrid Cloud Solutions",
        tagline: "Connecting On-Premise Infrastructure Seamlessly to the Cloud",
        summary: "Combine the security of on-premise servers with the elasticity of the cloud via secure IPsec VPN tunnels and Azure Arc.",
        description1: "Some workloads require local low latency, while others thrive in the cloud. NAPSE designs hybrid cloud environments that bridge both worlds seamlessly.",
        description2: "We configure redundant site-to-cloud VPN tunnels and Azure Arc centralized management, allowing you to control all systems from a single pane of glass.",
        image: "/assets/images/services/services-details-img-3.jpg",
        capabilitiesTitle: "Hybrid Cloud Capabilities",
        capabilitiesDesc: "The best of both worlds: local hardware speed with cloud disaster recovery.",
        capabilities: [
          "High-speed IPsec VPN and ExpressRoute hybrid interconnects",
          "Azure Arc centralized governance across on-premise and cloud VMs",
          "Hybrid identity synchronization using Microsoft Entra Connect",
          "Cloud burst computing for seasonal or compute-intensive workloads"
        ],
        faqs: [
          {
            q: "Can our on-premise active directory synchronize with cloud logins?",
            a: "Yes, Microsoft Entra Connect enables single sign-on (SSO) so employees use the same login credentials for on-premise PCs and cloud applications."
          }
        ]
      }
    ]
  },
  {
    id: "it-professional-services",
    slug: "it-professional-services",
    title: "IT Professional Services",
    shortTitle: "IT Professional Services",
    path: "/services/it-professional-services",
    icon: "icon-shield",
    image: "/assets/images/services/services-details-img-4.jpg",
    tagline: "System Integration, IT Deployments, Infrastructure Engineering & Consulting",
    description1: "Transforming ambitious technology visions into functional realities requires experienced project execution. NAPSE delivers turnkey IT Professional Services across the UAE.",
    description2: "From initial consulting and architectural design to physical racking, configuration, and final handover, our certified engineers ensure projects are delivered on time, within budget, and to the highest technical standards.",
    tabs: [
      {
        id: "installation-deployment",
        slug: "installation-deployment",
        title: "Installation & Deployment",
        tagline: "Physical Racking, Cabling Dressing & Hardware Commissioning",
        summary: "White-glove physical mounting, power distribution, and clean cable dressing for server rooms and data closets.",
        description1: "Hardware performance depends on clean, organized physical installation. Our deployment technicians unpack, mount, and cable dress servers, switches, and storage racks.",
        description2: "We ensure proper weight distribution, airflow clearance, dual power feeds, and labeled patch cabling for ease of long-term maintenance.",
        image: "/assets/images/services/services-details-img-4.jpg",
        capabilitiesTitle: "Deployment Capabilities",
        capabilitiesDesc: "Meticulous on-site physical installation and equipment mounting.",
        capabilities: [
          "Standardized 19-inch rack mounting for servers, SAN arrays, and switches",
          "Clean horizontal and vertical cable management and clear port labeling",
          "Dual A+B power feed connections to Uninterruptible Power Supplies (UPS)",
          "Hardware health diagnostic self-tests and initial power-on verification"
        ],
        faqs: [
          {
            q: "Can installation work be performed after normal business hours?",
            a: "Yes, our engineering teams regularly perform deployments in evenings or over weekends to prevent disruption to your office operations."
          }
        ]
      },
      {
        id: "configuration",
        slug: "configuration",
        title: "Configuration",
        tagline: "BIOS Hardening, Operating System Setup & Security Baseline Tuning",
        summary: "Precision software configuration, firmware updating, RAID volume creation, and network routing setup.",
        description1: "A newly mounted server or switch requires expert configuration before it can join your production network. NAPSE configures hardware according to vendor security best practices.",
        description2: "We update firmware, configure RAID storage, set up remote out-of-band management, and establish security baselines.",
        image: "/assets/images/services/services-2-2.jpg",
        capabilitiesTitle: "Configuration Capabilities",
        capabilitiesDesc: "Flawless software and firmware tuning for maximum performance.",
        capabilities: [
          "Latest stable firmware and BIOS updates across all controllers",
          "Hardware RAID array creation with hot-spare disk assignment",
          "Operating system installation (Windows Server, Linux) and hardening",
          "Network switch VLAN configuration, trunking, and port security"
        ],
        faqs: [
          {
            q: "Do you supply documentation of all configuration parameters?",
            a: "Yes, we deliver comprehensive as-built configuration documentation and network topology diagrams at project completion."
          }
        ]
      },
      {
        id: "infrastructure-implementation",
        slug: "infrastructure-implementation",
        title: "Infrastructure Implementation",
        tagline: "Turnkey Technology Rollouts for New Offices & Expansions",
        summary: "Complete implementation of servers, networks, firewalls, and user workstations for new corporate spaces.",
        description1: "Opening a new office or expanding a facility requires dozens of technology components to work together seamlessly. NAPSE manages the entire IT implementation roadmap.",
        description2: "From liaising with telecom providers for internet lines to setting up server rooms and user desks, we ensure turnkey readiness on day one.",
        image: "/assets/images/services/services-details-img-3.jpg",
        capabilitiesTitle: "Implementation Capabilities",
        capabilitiesDesc: "End-to-end execution of complex multi-technology infrastructure projects.",
        capabilities: [
          "Turnkey IT fit-outs for commercial offices, clinics, and retail outlets",
          "Coordination with Etisalat / du for fiber internet and SIP trunk provisioning",
          "Server room commissioning with precision cooling and UPS testing",
          "Simultaneous multi-workstation staging and domain onboarding"
        ],
        faqs: [
          {
            q: "How early in the office fit-out phase should NAPSE be involved?",
            a: "Engaging us during the architectural and MEP planning phase ensures containment and cooling requirements are factored in before walls are closed."
          }
        ]
      },
      {
        id: "system-integration",
        slug: "system-integration",
        title: "System Integration",
        tagline: "Connecting Disparate Software, Hardware & Cloud Ecosystems",
        summary: "Unify business tools, ERPs, Active Directory, and third-party APIs into a cohesive, secure IT environment.",
        description1: "Isolated IT systems cause data silos and operational friction. NAPSE integrates disparate applications, active directories, and databases.",
        description2: "We enable single sign-on (SSO), automated user provisioning, and secure data sync between on-premise systems and cloud platforms.",
        image: "/assets/images/services/services-details-img-5.jpg",
        capabilitiesTitle: "System Integration Strengths",
        capabilitiesDesc: "Eliminating silos by integrating hardware, software, and identity systems.",
        capabilities: [
          "Single Sign-On (SSO) integration using SAML 2.0 and OpenID Connect",
          "Active Directory and Microsoft Entra ID hybrid identity synchronization",
          "Automated user provisioning and de-provisioning workflows (SCIM)",
          "Secure API gateway configuration for cross-application communication"
        ],
        faqs: [
          {
            q: "Can you integrate our existing ERP with our cloud file storage?",
            a: "Yes, our systems integration team can build secure bridges between on-premise ERP databases and cloud repositories."
          }
        ]
      },
      {
        id: "it-consulting",
        slug: "it-consulting",
        title: "IT Consulting",
        tagline: "Strategic Technology Roadmaps, IT Audits & Technology Budgeting",
        summary: "Virtual CIO advisory, infrastructure maturity assessments, and technology budgeting for business leaders.",
        description1: "Technology decisions should drive measurable business growth, not unexpected expenses. NAPSE provides strategic IT consulting for corporate executives.",
        description2: "We audit your current technology stack, identify vulnerabilities and inefficiencies, and chart a phased modernization roadmap aligned with your business targets.",
        image: "/assets/images/services/services-2-4.jpg",
        capabilitiesTitle: "Consulting Capabilities",
        capabilitiesDesc: "Clear technology guidance that aligns IT investments with business goals.",
        capabilities: [
          "Comprehensive IT infrastructure and cybersecurity health audits",
          "Multi-year technology capital (CapEx) and operational (OpEx) budgeting",
          "Vendor selection assistance and technical RFP specification writing",
          "Business continuity and disaster recovery planning and governance"
        ],
        faqs: [
          {
            q: "What does an IT audit report include?",
            a: "Our audit covers hardware lifecycles, network bottleneck analysis, security vulnerabilities, licensing compliance, and actionable recommendations ranked by priority."
          }
        ]
      }
    ]
  },
  {
    id: "it-support-maintenance",
    slug: "it-support-maintenance",
    title: "IT Support & Maintenance",
    shortTitle: "IT Support & Maintenance",
    path: "/services/it-support-maintenance",
    icon: "icon-customer-service-headset",
    image: "/assets/images/services/services-details-img-5.jpg",
    tagline: "24/7 Technical Helpdesk, On-Site Engineering & Preventative Maintenance",
    description1: "Technical glitches cost companies time and money. NAPSE provides dependable, responsive IT Support and Maintenance services that keep your staff productive every single day.",
    description2: "With a dedicated helpdesk based in Abu Dhabi, rapid remote diagnostic tools, and certified field engineers dispatched across all Emirates, we resolve issues quickly and prevent future disruptions.",
    tabs: [
      {
        id: "technical-support",
        slug: "technical-support",
        title: "Technical Support",
        tagline: "Multi-Tier Helpdesk via Phone, Email & Remote Screen Sharing",
        summary: "Fast Level 1 to Level 3 technical troubleshooting for Windows, Mac, email, printers, and office applications.",
        description1: "Our helpdesk technicians are just a phone call or click away. We resolve everyday user issues—such as software crashes, password resets, and network dropouts—in minutes.",
        description2: "Using secure remote assistance software, our certified technicians diagnose and resolve problems quickly without disturbing your employees' workflow.",
        image: "/assets/images/services/services-details-img-5.jpg",
        capabilitiesTitle: "Helpdesk Capabilities",
        capabilitiesDesc: "Responsive end-user support that keeps staff productive.",
        capabilities: [
          "Multi-channel support via phone, dedicated email, and web ticketing portal",
          "Average first-response time under 10 minutes for priority support requests",
          "Support across Windows 10/11, Apple macOS, Microsoft 365, and mobile OS",
          "Standardized ticket escalation workflows with guaranteed SLA milestones"
        ],
        faqs: [
          {
            q: "What are your standard support operating hours?",
            a: "We offer standard 8x5 business hour coverage as well as 24/7/365 mission-critical support agreements with dedicated emergency hotlines."
          }
        ]
      },
      {
        id: "hardware-maintenance",
        slug: "hardware-maintenance",
        title: "Hardware Maintenance",
        tagline: "Preventative Cleaning, Thermal Audits & Rapid Component Replacement",
        summary: "Prolong equipment lifecycles with regular physical cleaning, fan checks, thermal paste replacement, and diagnostics.",
        description1: "Dust and heat in the UAE can severely degrade server and workstation components. Our preventative maintenance engineers inspect and clean physical hardware regularly.",
        description2: "We check fan speeds, thermal sensors, power supply health, and drive sector counts to replace failing components before an outage occurs.",
        image: "/assets/images/services/services-2-1.jpg",
        capabilitiesTitle: "Hardware Maintenance Strengths",
        capabilitiesDesc: "Protecting your hardware investments from UAE dust and heat buildup.",
        capabilities: [
          "Scheduled physical cleaning of server heat sinks, fans, and power supplies",
          "Hardware component diagnostics (RAM errors, disk bad sectors, PSU voltages)",
          "Standby temporary replacement parts during extended manufacturer repairs",
          "Firmware and controller BIOS updates applied during maintenance windows"
        ],
        faqs: [
          {
            q: "How often should enterprise servers receive physical maintenance?",
            a: "In the UAE climate, we recommend quarterly physical inspections and cleaning to prevent thermal throttling and fan failure."
          }
        ]
      },
      {
        id: "network-support",
        slug: "network-support",
        title: "Network Support",
        tagline: "Continuous Network Monitoring, Firewall Policy Updates & Troubleshooting",
        summary: "Keep your corporate connectivity fast and secure with active network monitoring and rapid incident triage.",
        description1: "A network issue affects every employee simultaneously. NAPSE continuously monitors your switches, firewalls, and Wi-Fi access points for packet loss and latency.",
        description2: "We handle firewall firmware patching, VPN credential management, bandwidth shaping, and emergency switch port troubleshooting.",
        image: "/assets/images/services/services-2-3.jpg",
        capabilitiesTitle: "Network Support Capabilities",
        capabilitiesDesc: "Proactive care that ensures continuous office connectivity.",
        capabilities: [
          "Continuous SNMP network uptime and bandwidth utilization monitoring",
          "Firewall security policy and VPN user credential administration",
          "Wi-Fi channel calibration and interference troubleshooting",
          "Rapid on-site dispatch for switch failures or fiber link degradations"
        ],
        faqs: [
          {
            q: "Do you monitor our network outside of normal business hours?",
            a: "Yes, our automated network monitoring systems track uptime 24/7 and alert our on-call engineers immediately if a core switch or internet line fails."
          }
        ]
      },
      {
        id: "amc-services",
        slug: "amc-services",
        title: "AMC Services",
        tagline: "Comprehensive Annual Maintenance Contracts with Guaranteed SLAs",
        summary: "Predictable annual IT maintenance agreements covering hardware, software, emergency on-site visits, and audits.",
        description1: "Eliminate unexpected repair costs with an Annual Maintenance Contract (AMC) from NAPSE. We provide comprehensive (parts and labor) and non-comprehensive contracts.",
        description2: "Every AMC includes dedicated account management, regular preventative health visits, and guaranteed SLA on-site response times across the UAE.",
        image: "/assets/images/services/services-four-img-1.jpg",
        capabilitiesTitle: "AMC Contract Features",
        capabilitiesDesc: "Fixed-cost peace of mind for your entire technology infrastructure.",
        capabilities: [
          "Comprehensive (including parts) and Non-Comprehensive AMC models",
          "Guaranteed 2-hour emergency on-site engineer dispatch across the UAE",
          "Quarterly preventative physical and software health audits",
          "Detailed monthly incident summary reports and asset health metrics"
        ],
        faqs: [
          {
            q: "What is the difference between Comprehensive and Non-Comprehensive AMC?",
            a: "Comprehensive covers both technician labor and the cost of replacement hardware parts if components fail. Non-Comprehensive covers all labor and support visits, with replacement parts billed separately at wholesale prices."
          }
        ]
      },
      {
        id: "remote-on-site-support",
        slug: "remote-on-site-support",
        title: "Remote & On-Site Support",
        tagline: "Hybrid Support Model: Instant Remote Fixes + Fast UAE Field Engineers",
        summary: "The ideal balance of instant remote helpdesk access combined with certified field engineers ready for on-site dispatch.",
        description1: "Over 85% of everyday software glitches can be fixed remotely in under 15 minutes. For physical issues, our field technicians dispatch directly to your office.",
        description2: "We cover corporate offices, industrial sites, retail stores, and remote branches across Abu Dhabi, Dubai, and the Northern Emirates.",
        image: "/assets/images/services/services-details-img-5.jpg",
        capabilitiesTitle: "Support Delivery Capabilities",
        capabilitiesDesc: "Reliable support that meets your team wherever they work.",
        capabilities: [
          "Instant secure remote screen-sharing tools with full user consent",
          "Field engineering vehicles equipped with replacement cables and tools",
          "Coverage for both corporate office environments and remote industrial sites",
          "Support for hybrid workers traveling within the UAE or internationally"
        ],
        faqs: [
          {
            q: "How fast can an engineer reach our office in an emergency?",
            a: "Under our priority SLA contracts, field engineers arrive on-site within 2 to 4 hours across major commercial centers in the UAE."
          }
        ]
      }
    ]
  },
  {
    id: "enterprise-data-center",
    slug: "enterprise-data-center",
    title: "Enterprise & Data Center Solutions",
    shortTitle: "Enterprise & Data Center",
    path: "/services/enterprise-data-center",
    icon: "icon-server",
    image: "/assets/images/services/services-details-img-2.jpg",
    tagline: "Hyperconverged Infrastructure (HCI), Enterprise Storage & GPU Clusters",
    summary: "High-density compute clusters, software-defined storage, AI/GPU acceleration, and hybrid data center architectures.",
    description1: "Demanding enterprise workloads require infrastructure designed for scale. NAPSE architects Hyperconverged Infrastructure (HCI), all-flash storage arrays, and GPU clusters for enterprise analytics and AI.",
    description2: "We partner with Dell Technologies, Nutanix, Cisco, and NVIDIA to deliver turnkey private clouds that simplify management and scale seamlessly.",
    tabs: [
      {
        id: "data-center-infrastructure-enterprise",
        slug: "data-center-infrastructure",
        title: "Data Center Infrastructure",
        tagline: "Tier III Data Center Racking, Containment & High-Density Power",
        summary: "Precision cooling, smart PDUs, raised floor airflow, and modular UPS backup designed for mission-critical reliability.",
        description1: "We build enterprise server rooms that maintain reliable temperatures and clean power regardless of outside conditions.",
        description2: "Our installations incorporate cold/hot aisle containment, redundant UPS systems, and comprehensive environmental telemetry.",
        image: "/assets/images/services/services-details-img-2.jpg",
        capabilitiesTitle: "Data Center Strengths",
        capabilitiesDesc: "Physical data center foundations designed for high-density compute.",
        capabilities: [
          "Hot and cold aisle containment systems that reduce cooling costs by 30%",
          "Modular parallel UPS systems with automated battery health testing",
          "Branch circuit monitoring and real-time PUE energy efficiency tracking",
          "Automated gaseous fire suppression (FM-200 / Novec 1230) coordination"
        ],
        faqs: [
          {
            q: "Can you help optimize cooling in our existing server room?",
            a: "Yes, we conduct airflow audits and install blanking panels, containment curtains, and smart vents to eliminate hot spots."
          }
        ]
      },
      {
        id: "hci-solutions",
        slug: "hci-solutions",
        title: "HCI Solutions",
        tagline: "Hyperconverged Infrastructure: Compute, Storage & Networking in One",
        summary: "Simplify your data center with Dell VxRail, Nutanix, and VMware vSAN hyperconverged appliances.",
        description1: "Traditional multi-tier IT architecture is complex to manage. Hyperconverged Infrastructure (HCI) combines compute, storage, and networking into compact modular nodes.",
        description2: "NAPSE designs HCI clusters that scale simply by adding nodes, eliminating complicated Fibre Channel SAN zoning and storage provisioning.",
        image: "/assets/images/services/services-details-img-3.jpg",
        capabilitiesTitle: "HCI Capabilities",
        capabilitiesDesc: "Modern data centers simplified through software-defined hyperconvergence.",
        capabilities: [
          "Turnkey Dell VxRail and Nutanix Enterprise Cloud cluster rollouts",
          "VMware vSAN software-defined storage with deduplication and erasure coding",
          "Single-click non-disruptive cluster firmware and hypervisor upgrades",
          "Linear performance scaling as additional modular nodes are added"
        ],
        faqs: [
          {
            q: "How does HCI compare to a traditional Server + SAN setup?",
            a: "HCI eliminates dedicated SAN storage arrays and separate storage fabrics, drastically lowering maintenance complexity, power, and rack space."
          }
        ]
      },
      {
        id: "enterprise-compute",
        slug: "enterprise-compute",
        title: "Enterprise Compute",
        tagline: "Multi-Socket Blade & Rack Servers for Big Data & ERP Applications",
        summary: "High-core-density compute clusters powered by latest generation Intel Xeon Scalable and AMD EPYC processors.",
        description1: "Run your SAP, Oracle, and enterprise databases on servers engineered for massive in-memory processing.",
        description2: "We build multi-node high-availability clusters with redundant power supplies, multi-terabyte RAM allocations, and low-latency networking.",
        image: "/assets/images/services/services-2-1.jpg",
        capabilitiesTitle: "Compute Capabilities",
        capabilitiesDesc: "Raw computational muscle for transaction-intensive business systems.",
        capabilities: [
          "Quad-socket and dual-socket high-density server configurations",
          "Support for up to 6TB of high-speed DDR5 ECC Registered memory per host",
          "PCIe Gen 5 high-speed expansion slots for 100G/200G network cards",
          "Hardware fault-tolerant clustering with sub-second failover protocols"
        ],
        faqs: [
          {
            q: "Do you configure SAP HANA certified hardware?",
            a: "Yes, our server configurations comply with official SAP HANA hardware certification matrices."
          }
        ]
      },
      {
        id: "enterprise-storage",
        slug: "enterprise-storage",
        title: "Enterprise Storage",
        tagline: "Petabyte-Scale All-Flash Arrays, Object Storage & NVMe Fabrics",
        summary: "Sub-millisecond data access for enterprise databases, virtualization farms, and unstructured content archives.",
        description1: "Store petabytes of business data with high throughput and data integrity. We deploy enterprise all-flash arrays using NVMe-over-Fabrics (NVMe-oF).",
        description2: "Our storage designs feature automated snapshot replication, continuous data validation, and multi-tier archiving to cloud storage.",
        image: "/assets/images/services/services-2-2.jpg",
        capabilitiesTitle: "Enterprise Storage Capabilities",
        capabilitiesDesc: "Extreme IOPS and enterprise durability for mission-critical databases.",
        capabilities: [
          "NVMe-oF and 32Gb Fibre Channel enterprise storage connectivity",
          "Synchronous multi-site storage replication with zero data loss (RPO 0)",
          "S3-compatible on-premise object storage for unstructured data and backups",
          "Predictive AI analytics for proactive drive failure detection"
        ],
        faqs: [
          {
            q: "What latency can we expect with an All-Flash NVMe array?",
            a: "Our modern enterprise All-Flash arrays regularly achieve sustained latencies under 0.5 milliseconds even during heavy I/O workloads."
          }
        ]
      },
      {
        id: "ai-gpu-infrastructure",
        slug: "ai-gpu-infrastructure",
        title: "AI & GPU Infrastructure",
        tagline: "NVIDIA Tensor Core GPU Servers for AI, LLM & Machine Learning",
        summary: "Deploy on-premise AI training and inference hardware powered by NVIDIA H100, A100, and L40S GPU accelerators.",
        description1: "Keep your proprietary corporate data secure by running AI and machine learning workloads on private, on-premise GPU clusters.",
        description2: "NAPSE designs high-density GPU server rigs with PCIe Gen 5 interconnects, high-throughput liquid cooling, and optimized AI software frameworks.",
        image: "/assets/images/services/services-details-img-6.jpg",
        capabilitiesTitle: "AI & GPU Capabilities",
        capabilitiesDesc: "Cutting-edge computational infrastructure for modern AI initiatives.",
        capabilities: [
          "NVIDIA H100, A100 & L40S Tensor Core GPU server configurations",
          "High-speed InfiniBand & 100GbE RoCE low-latency GPU networking",
          "Direct liquid-to-chip cooling options for sustained high-TDP workloads",
          "Pre-configured containerized AI stacks (PyTorch, TensorFlow, Docker)"
        ],
        faqs: [
          {
            q: "Can AI models be run securely on-premise without cloud exposure?",
            a: "Yes, our on-premise GPU clusters allow you to train and run local LLMs and computer vision models completely within your secure corporate network."
          }
        ]
      }
    ]
  },
  {
    id: "elv-solutions",
    slug: "elv-solutions",
    title: "ELV Solutions",
    shortTitle: "ELV Solutions",
    path: "/services/elv-solutions",
    icon: "icon-shield",
    image: "/assets/images/services/services-four-img-2.jpg",
    tagline: "Extra Low Voltage Systems, CCTV, Biometric Access & Smart Buildings",
    description1: "Modern facilities demand integrated low-voltage engineering that combines physical security, smart building access, and high-speed cabling.",
    description2: "NAPSE designs, installs, and certifies complete ELV systems for corporate offices, commercial towers, warehouses, and hospitality venues across the UAE, compliant with local security authority regulations.",
    tabs: [
      {
        id: "cctv-video-surveillance",
        slug: "cctv-video-surveillance",
        title: "CCTV & Video Surveillance",
        tagline: "High-Definition IP Security Cameras with AI Analytics & SIRA Compliance",
        summary: "4K IP surveillance cameras, Network Video Recorders (NVR), license plate recognition, and long-term storage.",
        description1: "Keep your facilities monitored around the clock with enterprise IP CCTV systems. We deploy 4K optical cameras with infrared night vision and AI object detection.",
        description2: "Our surveillance architectures comply with UAE security authority mandates (including SIRA and ADMCC standards) with required video retention storage.",
        image: "/assets/images/services/services-four-img-2.jpg",
        capabilitiesTitle: "Surveillance Capabilities",
        capabilitiesDesc: "High-clarity security monitoring with intelligent automated event detection.",
        capabilities: [
          "High-definition 4K and multi-sensor panoramic IP cameras (Hikvision, Dahua, Axis)",
          "AI analytics: facial recognition, license plate reading, and intrusion detection",
          "Enterprise Network Video Recorders (NVR) with RAID storage and 30-180 day retention",
          "Secure remote mobile viewing apps and centralized security control room integration"
        ],
        faqs: [
          {
            q: "Do your camera systems comply with SIRA security regulations in Dubai?",
            a: "Yes, our installations adhere strictly to SIRA / ADMCC technical guidelines, including approved camera resolutions, frame rates, and retention storage."
          }
        ]
      },
      {
        id: "access-control-systems",
        slug: "access-control-systems",
        title: "Access Control Systems",
        tagline: "Biometric Facial Recognition, RFID Smart Cards & Mobile Credentials",
        summary: "Control door access with magnetic locks, smart card readers, and touchless biometric terminals.",
        description1: "Prevent unauthorized entry to sensitive areas like server rooms, executive suites, and inventory warehouses. NAPSE installs centralized access control systems.",
        description2: "We integrate touchless facial recognition, encrypted RFID keycards, and smartphone mobile badges with centralized door schedule management.",
        image: "/assets/images/services/services-details-img-1.jpg",
        capabilitiesTitle: "Access Control Capabilities",
        capabilitiesDesc: "Granular entry permissions that protect critical business spaces.",
        capabilities: [
          "Touchless high-speed facial recognition and fingerprint biometric terminals",
          "Encrypted RFID/Mifare proximity smart card and keyfob readers",
          "Electromagnetic locks, drop bolts, and emergency exit push bars",
          "Centralized access management software with audit logs and door schedules"
        ],
        faqs: [
          {
            q: "Can access control unlock doors automatically in case of a fire alarm?",
            a: "Yes, our systems integrate directly with building Fire Alarm Control Panels (FACP) to release all electromagnetic locks automatically during emergencies."
          }
        ]
      },
      {
        id: "time-attendance",
        slug: "time-attendance",
        title: "Time & Attendance",
        tagline: "Automated Employee Clock-In with HR & Payroll Software Integration",
        summary: "Eliminate manual timesheets with biometric clock-in terminals that sync directly with enterprise HR software.",
        description1: "Accurate payroll begins with dependable attendance tracking. We install biometric time and attendance terminals with anti-spoofing facial recognition.",
        description2: "Our software automatically logs shifts, overtime, and leaves, exporting formatted data directly to your HR and payroll platforms.",
        image: "/assets/images/services/services-details-img-5.jpg",
        capabilitiesTitle: "Time & Attendance Capabilities",
        capabilitiesDesc: "Automated, tamper-proof workforce attendance tracking.",
        capabilities: [
          "Anti-spoofing dual-lens biometric facial and fingerprint terminals",
          "Automated shift scheduling, overtime calculation, and leave management",
          "Direct integration with SAP, Oracle, Zoho People, and custom payroll systems",
          "Multi-location cloud synchronization for businesses with multiple branches"
        ],
        faqs: [
          {
            q: "Can staff use mobile phones to clock in when working on client sites?",
            a: "Yes, our cloud attendance systems support mobile app clock-ins with GPS geofencing verification."
          }
        ]
      },
      {
        id: "structured-cabling",
        slug: "structured-cabling",
        title: "Structured Cabling",
        tagline: "Cat6A, Cat7 & Single/Multi-Mode Optical Fiber Backbone Cabling",
        summary: "Fluke-tested structured network cabling, server room cable trays, patch panels, and fiber backbones.",
        description1: "A clean, organized cabling plant guarantees reliable data transmission for decades. NAPSE engineers structured cabling systems according to ANSI/TIA/EIA standards.",
        description2: "Every cable run is professionally terminated, dressed in cable trays, labeled on patch panels, and certified with Fluke network analyzers.",
        image: "/assets/images/services/services-details-img-3.jpg",
        capabilitiesTitle: "Cabling Engineering Strengths",
        capabilitiesDesc: "Certified, organized cabling infrastructure built for high data speeds.",
        capabilities: [
          "Cat6 and Cat6A 10Gbps shielded (STP) and unshielded (UTP) copper cabling",
          "Single-mode (OS2) and multi-mode (OM3/OM4) fiber optic backbone installation",
          "Server rack patch panels, horizontal wire managers, and port identification",
          "100% Fluke DSX-8000 test certification reports supplied for every drop"
        ],
        faqs: [
          {
            q: "Do you provide certified warranty certificates for the cabling?",
            a: "Yes, we provide 25-year manufacturer performance warranty certificates from certified partners like Schneider, CommScope, and Legrand."
          }
        ]
      },
      {
        id: "intercom-systems",
        slug: "intercom-systems",
        title: "Intercom Systems",
        tagline: "IP Video Door Phones, Gate Stations & Smartphone Answering",
        summary: "Audio/video intercom systems allowing receptionists and security guards to visually verify visitors before granting access.",
        description1: "Enhance front-desk security with modern IP video intercoms. Visitors can speak with reception or call specific office extensions with crystal-clear audio and HD video.",
        description2: "Our intercoms integrate with electromagnetic door locks, allowing staff to buzz visitors in directly from desktop monitors or smartphones.",
        image: "/assets/images/services/services-details-img-4.jpg",
        capabilitiesTitle: "Intercom Capabilities",
        capabilitiesDesc: "Clear audio and visual visitor verification for corporate offices and villas.",
        capabilities: [
          "Vandal-resistant outdoor IP camera gate stations with night illumination",
          "Indoor touch-screen color master stations for reception and security",
          "SIP integration allowing intercom calls to ring on desk VoIP phones",
          "Direct integration with electric strike locks and automatic sliding doors"
        ],
        faqs: [
          {
            q: "Can intercom calls be answered on a smartphone when the front desk is unattended?",
            a: "Yes, our IP intercom systems route calls to designated mobile apps so security staff can grant access remotely."
          }
        ]
      },
      {
        id: "smatv-iptv",
        slug: "smatv-iptv",
        title: "SMATV / IPTV",
        tagline: "Satellite Master Antenna & IP Television for Hospitality & Offices",
        summary: "Distribute HD satellite television and interactive IPTV channels across offices, hotels, and executive lounges.",
        description1: "Distribute news, financial channels, and entertainment displays across corporate lounges, cafeterias, and meeting areas without messy individual decoders.",
        description2: "We design Satellite Master Antenna Television (SMATV) and network-based IPTV headends that stream HD channels over existing structured LAN cabling.",
        image: "/assets/images/services/services-four-img-1.jpg",
        capabilitiesTitle: "SMATV & IPTV Capabilities",
        capabilitiesDesc: "Clean, high-definition television distribution over standard data networks.",
        capabilities: [
          "Centralized satellite dish headends receiving Nilesat, Arabsat, and Hotbird",
          "IPTV streamers distributing digital TV channels over office LAN cabling",
          "Custom corporate branded landing channels and information slides",
          "RF amplifiers, multiswitches, and coaxial/fiber distribution networks"
        ],
        faqs: [
          {
            q: "Can IPTV channels be viewed on standard smart TVs without set-top boxes?",
            a: "Yes, our IPTV platforms support custom smart TV applications (Samsung Tizen, LG webOS, Android TV) without needing external decoder boxes."
          }
        ]
      },
      {
        id: "gate-barrier-parking-systems",
        slug: "gate-barrier-parking-systems",
        title: "Gate Barrier & Parking Systems",
        tagline: "Automatic Boom Barriers, RFID Long-Range Readers & ANPR Parking",
        summary: "Manage vehicle entry with automatic boom barriers, long-range RFID windshield tags, and Automatic Number Plate Recognition (ANPR).",
        description1: "Secure corporate parking lots and commercial garages with automatic boom barriers. We install fast-action barriers with obstacle detection sensors.",
        description2: "We integrate Automatic Number Plate Recognition (ANPR) cameras that lift barriers automatically for registered staff license plates.",
        image: "/assets/images/services/services-details-img-2.jpg",
        capabilitiesTitle: "Parking Control Capabilities",
        capabilitiesDesc: "Automated, secure vehicular access control for corporate facilities.",
        capabilities: [
          "Heavy-duty commercial boom barriers with brushless motors for continuous cycling",
          "Automatic Number Plate Recognition (ANPR) cameras with high capture accuracy",
          "UHF long-range RFID windshield sticker readers for hands-free vehicle entry",
          "Safety photocells and loop detectors that prevent barrier drops on vehicles"
        ],
        faqs: [
          {
            q: "Can the parking barrier system restrict parking to registered employee cars only?",
            a: "Yes, the ANPR software checks license plates against an authorized database and denies entry to unrecognized vehicles."
          }
        ]
      },
      {
        id: "building-management-systems",
        slug: "building-management-systems",
        title: "Building Management Systems (BMS)",
        tagline: "Intelligent HVAC, Lighting & Energy Control Automation",
        summary: "Centralized monitoring and automation of building lighting, air conditioning, power meters, and environmental sensors.",
        description1: "Smart buildings consume less power and provide superior comfort. NAPSE implements open-protocol Building Management Systems (BMS) using BACnet and Modbus.",
        description2: "Our automation platforms monitor energy meters, regulate HVAC cooling based on occupancy, and alert facility managers to equipment malfunctions.",
        image: "/assets/images/services/services-details-img-3.jpg",
        capabilitiesTitle: "BMS Automation Capabilities",
        capabilitiesDesc: "Centralized facility control that lowers operational electricity consumption.",
        capabilities: [
          "BACnet and Modbus integration with chillers, FCUs, and lighting panels",
          "Real-time energy consumption analytics and automated peak-load shaving",
          "Automated occupancy-based temperature setback routines for energy savings",
          "Interactive web dashboard with visual floorplan graphics and alarm logs"
        ],
        faqs: [
          {
            q: "How much energy can an integrated BMS save in a commercial building?",
            a: "Optimizing HVAC schedules and occupancy-based setback typically reduces commercial air conditioning power costs by 15% to 25%."
          }
        ]
      }
    ]
  },
  {
    id: "audio-visual-av-solutions",
    slug: "audio-visual-av-solutions",
    title: "Audio Visual (AV) Solutions",
    shortTitle: "Audio Visual (AV)",
    path: "/services/audio-visual-av-solutions",
    icon: "icon-customer-service-headset",
    image: "/assets/images/services/services-four-img-1.jpg",
    tagline: "Executive Boardrooms, Video Conferencing, LED Video Walls & Sound Systems",
    description1: "Communication in modern workspaces requires immersive, seamless audio-visual experiences. NAPSE engineers professional AV installations for executive boardrooms, training centers, and corporate auditoriums.",
    description2: "From certified Microsoft Teams and Zoom Room conference setups to ultra-fine pixel pitch LED video walls and acoustic sound engineering, we deliver flawless presentation environments.",
    tabs: [
      {
        id: "meeting-room-solutions",
        slug: "meeting-room-solutions",
        title: "Meeting Room Solutions",
        tagline: "One-Touch Join Conference Systems for Microsoft Teams & Zoom Rooms",
        summary: "Turnkey meeting rooms equipped with smart video bars, tabletop touch controllers, and wireless screen sharing.",
        description1: "Eliminate conference room cable clutter and delayed meetings. We configure dedicated room systems (Logitech, Yealink, Poly) where staff join scheduled video calls with a single touch.",
        description2: "We integrate ceiling beamforming microphones and 4K optical cameras that automatically frame active speakers for natural hybrid meetings.",
        image: "/assets/images/services/services-four-img-1.jpg",
        capabilitiesTitle: "Meeting Room Capabilities",
        capabilitiesDesc: "Zero-friction hybrid collaboration for huddle spaces and boardrooms.",
        capabilities: [
          "Certified Microsoft Teams Rooms (MTR) and Zoom Rooms appliances",
          "Tabletop touch controllers for one-touch meeting join and mute controls",
          "Wireless presentation (ClickShare, Miracast, AirPlay) with zero dongle drivers",
          "Integrated tabletop pop-up power modules with USB-C 65W charging and HDMI"
        ],
        faqs: [
          {
            q: "Can participants share laptop screens without plugging in any cables?",
            a: "Yes, our wireless presentation systems allow one-click screen sharing directly from laptops or mobile phones without messy cable runs."
          }
        ]
      },
      {
        id: "video-conferencing",
        slug: "video-conferencing",
        title: "Video Conferencing",
        tagline: "AI Auto-Framing Cameras, Beamforming Mic Pods & Acoustic Processing",
        summary: "Crystal-clear audio and video conferencing that brings remote teams together seamlessly.",
        description1: "Poor audio ruins meetings. NAPSE installs professional video conferencing hardware with acoustic echo cancellation and AI noise reduction.",
        description2: "Background keyboard typing, air conditioning hum, and paper rustling are automatically filtered out, ensuring every speaker is heard clearly.",
        image: "/assets/images/services/services-details-img-4.jpg",
        capabilitiesTitle: "Video Conferencing Strengths",
        capabilitiesDesc: "Broadcast-quality video and crystal-clear microphone audio.",
        capabilities: [
          "4K PTZ (Pan-Tilt-Zoom) motorized cameras with optical zoom and AI auto-tracking",
          "Ceiling and tabletop beamforming microphone arrays with 360-degree pickup",
          "Digital Signal Processors (DSP) with acoustic echo cancellation (AEC)",
          "Compatibility across Microsoft Teams, Zoom, Google Meet, and Webex"
        ],
        faqs: [
          {
            q: "How does AI speaker tracking work during a meeting?",
            a: "The camera combines voice direction algorithms with facial detection to smoothly zoom and frame whichever person is currently speaking."
          }
        ]
      },
      {
        id: "digital-signage",
        slug: "digital-signage",
        title: "Digital Signage",
        tagline: "Commercial High-Brightness Displays with Cloud Content Management",
        summary: "Display corporate announcements, metrics, and advertisements with centrally managed commercial digital displays.",
        description1: "Engage visitors and employees with dynamic digital signage screens. We supply commercial displays (Samsung, LG) rated for continuous 16/7 and 24/7 operation.",
        description2: "Our cloud CMS software lets marketing teams push video playlists, live news tickers, and corporate dashboards to screens across all branches with a single click.",
        image: "/assets/images/services/services-details-img-5.jpg",
        capabilitiesTitle: "Digital Signage Capabilities",
        capabilitiesDesc: "Centrally controlled visual communications for lobbies and hallways.",
        capabilities: [
          "High-brightness commercial displays (up to 700 nits) resistant to sunlight glare",
          "Cloud-based CMS software with scheduled content calendars and playlist grouping",
          "Slim bezel portrait and landscape wall mounting with tamper-proof brackets",
          "Automated screen on/off power schedules that conserve electricity overnight"
        ],
        faqs: [
          {
            q: "Can our marketing team update screen content remotely from anywhere?",
            a: "Yes, our web-based CMS allows authorized users to upload images, videos, and live announcements from any browser instantly."
          }
        ]
      },
      {
        id: "led-video-walls",
        slug: "led-video-walls",
        title: "LED Video Walls",
        tagline: "Fine Pixel Pitch Indoor & Outdoor Seamless LED Video Displays",
        summary: "Seamless large-format LED video walls for corporate auditoriums, executive boardrooms, and command centers.",
        description1: "Make an unforgettable visual statement. Unlike LCD screens with dividing bezels, direct-view LED video walls deliver a completely seamless canvas of any size.",
        description2: "We engineer fine pixel pitch (1.2mm, 1.5mm, 1.8mm) video walls delivering high refresh rates, deep contrast ratios, and HDR color accuracy.",
        image: "/assets/images/services/services-details-img-6.jpg",
        capabilitiesTitle: "LED Video Wall Capabilities",
        capabilitiesDesc: "Ultra-bright, seamless visual displays for high-impact enterprise spaces.",
        capabilities: [
          "Fine pixel pitch indoor LED cabinets (0.9mm to 1.8mm) with front-service access",
          "Advanced 4K/8K video wall processors with multi-window layout control",
          "Redundant power supplies and signal receiving cards for 100% mission uptime",
          "Custom curved and corner-wrapped LED wall architectural engineering"
        ],
        faqs: [
          {
            q: "How are individual LED modules replaced if a pixel fails?",
            a: "Our LED cabinets feature magnetic front service access, allowing a technician to vacuum-extract and replace a faulty module in under 2 minutes without dismantling the wall."
          }
        ]
      },
      {
        id: "projectors-displays",
        slug: "projectors-displays",
        title: "Projectors & Displays",
        tagline: "High-Lumen Laser Projectors & Commercial 4K Interactive Displays",
        summary: "Ultra-short-throw laser projectors, motorized projection screens, and large 85-inch to 98-inch commercial screens.",
        description1: "For training halls and auditoriums requiring massive image sizes, laser projectors provide an economical, high-brightness solution.",
        description2: "We supply 6,000 to 15,000 lumen solid-state laser projectors from Epson and Panasonic that deliver 20,000 hours of maintenance-free operation.",
        image: "/assets/images/services/services-four-img-2.jpg",
        capabilitiesTitle: "Projection & Display Capabilities",
        capabilitiesDesc: "Big-screen presentations engineered for bright corporate auditoriums.",
        capabilities: [
          "Maintenance-free 3LCD/DLP solid-state laser light engines (20,000+ hours)",
          "Motorized drop-down tensioned projection screens with 12V trigger sync",
          "Ultra-short-throw lenses for presentations without presenter shadow interference",
          "Large format 85-inch, 98-inch, and 110-inch commercial 4K display panels"
        ],
        faqs: [
          {
            q: "Do laser projectors require expensive replacement bulbs?",
            a: "No, solid-state laser engines eliminate traditional lamps, delivering instant on/off performance and over 20,000 hours of continuous operation."
          }
        ]
      },
      {
        id: "professional-audio-systems",
        slug: "professional-audio-systems",
        title: "Professional Audio Systems",
        tagline: "Acoustic Engineering, Line Arrays, Wireless Microphones & Digital DSPs",
        summary: "Pristine speech reinforcement and musical clarity for corporate town halls, auditoriums, and ballrooms.",
        description1: "Great visuals with muffled sound result in poor presentations. We design professional sound reinforcement systems tailored to room acoustics.",
        description2: "We deploy beam-steered line array speakers, Dante networked digital audio processors, and UHF wireless handheld/lapel microphones.",
        image: "/assets/images/services/services-2-4.jpg",
        capabilitiesTitle: "Professional Audio Capabilities",
        capabilitiesDesc: "Studio-grade speech intelligibility across every seat in the room.",
        capabilities: [
          "Dante/AES67 digital audio-over-IP networking for multi-channel audio",
          "Line array column speakers delivering uniform acoustic volume coverage",
          "Multi-channel UHF wireless handheld, lapel, and gooseneck microphone systems",
          "Automated digital feedback suppression and acoustic room equalization"
        ],
        faqs: [
          {
            q: "Can microphones and background music be controlled from a simple wall panel?",
            a: "Yes, we install intuitive digital wall volume controllers and iPad interfaces with simple presets for non-technical presenters."
          }
        ]
      },
      {
        id: "pa-background-music-systems",
        slug: "pa-background-music-systems",
        title: "PA & Background Music Systems",
        tagline: "Public Address (PA), Multi-Zone Background Music (BGM) & Paging",
        summary: "Multi-zone ceiling speakers for commercial offices, retail stores, and building emergency voice announcements.",
        description1: "Deliver background music and voice paging across multiple office zones and hallways with discrete architectural ceiling speakers.",
        description2: "Our 100V line Public Address systems allow receptionists to page specific zones or broadcast emergency evacuation announcements across all floors.",
        image: "/assets/images/services/services-details-img-3.jpg",
        capabilitiesTitle: "PA & BGM Capabilities",
        capabilitiesDesc: "Distributed ambient audio and emergency announcement coverage.",
        capabilities: [
          "Discrete flush-mount architectural ceiling speakers with clean white grilles",
          "Multi-zone audio matrices allowing different music and volume in each area",
          "Paging microphone stations with zone-select buttons for reception desks",
          "Emergency voice evacuation override integrated with building fire alarms"
        ],
        faqs: [
          {
            q: "Can different music be played in the reception area versus the cafeteria?",
            a: "Yes, our multi-zone audio processors support independent audio sources (Spotify, radio, streaming) and volume levels for each designated zone."
          }
        ]
      },
      {
        id: "control-automation-systems",
        slug: "control-automation-systems",
        title: "Control & Automation Systems",
        tagline: "Crestron, Extron & AMX One-Touch Room Automation Panels",
        summary: "One-touch control of room lighting, motorized blinds, video displays, and conference audio from sleek touch screens.",
        description1: "Eliminate multiple handheld remote controls. We program unified room automation systems (Crestron, Extron, Kramer) accessible from custom touch screens.",
        description2: "With a single tap on 'Presentation Mode', room lights dim, window shades lower, the display powers on, and audio inputs configure automatically.",
        image: "/assets/images/services/services-details-img-1.jpg",
        capabilitiesTitle: "Automation Capabilities",
        capabilitiesDesc: "Unified room technology control from a single customized interface.",
        capabilities: [
          "Custom programmed 7-inch and 10-inch tabletop and in-wall touch panels",
          "Automated macro presets: 'Video Call', 'Presentation', 'Conference', 'All Off'",
          "Motorized window shade and architectural lighting dimmer control integration",
          "Centralized equipment status monitoring and automatic nightly shutdown"
        ],
        faqs: [
          {
            q: "Can the touch screen interface be branded with our company logo?",
            a: "Yes, our UI designers build fully branded touch screen interfaces with your company logo, corporate colors, and tailored button layouts."
          }
        ]
      },
      {
        id: "interactive-displays",
        slug: "interactive-displays",
        title: "Interactive Displays",
        tagline: "4K Touchscreen Smart Whiteboards for Brainstorming & Hybrid Teams",
        summary: "Interactive touch displays (Maxhub, Promethean, Samsung Flip) with multi-touch digital whiteboarding and wireless casting.",
        description1: "Transform team brainstorming with 4K interactive touch displays. Teams can write, annotate over spreadsheets, and save meeting notes directly to cloud storage.",
        description2: "With built-in 4K cameras, beamforming microphones, and dual operating systems (Android and Windows PC modules), these displays serve as complete all-in-one meeting hubs.",
        image: "/assets/images/services/services-details-img-5.jpg",
        capabilitiesTitle: "Interactive Display Capabilities",
        capabilitiesDesc: "Immersive collaborative touchscreens that turn meetings into workshops.",
        capabilities: [
          "Zero-latency multi-touch writing with natural pen-on-paper sensation",
          "Integrated 4K wide-angle camera and 8-array beamforming microphone pods",
          "Slot-in OPS Windows 11 PC module for running native enterprise desktop apps",
          "QR code export of meeting notes for instant distribution to attendees"
        ],
        faqs: [
          {
            q: "Do interactive touch displays require special whiteboard markers?",
            a: "No, they use included passive magnetic styluses or even finger touch, and whiteboard sessions can be erased with a simple palm swipe."
          }
        ]
      }
    ]
  }
];

export const getCategoryBySlug = (slug) => {
  if (!slug) return serviceCategories[0];
  const clean = slug.toLowerCase().replace(/\.html$/, "").replace(/^\/services\//, "").replace(/^\/service\//, "");
  
  // Exact match
  const exact = serviceCategories.find((cat) => cat.slug === clean || cat.id === clean);
  if (exact) return exact;

  // Check alias / normalized matches
  if (clean === "enterprise-data-center-solutions" || clean === "data-center-solutions") {
    return serviceCategories.find((cat) => cat.id === "enterprise-data-center") || serviceCategories[0];
  }
  if (clean === "audio-visual-solutions" || clean === "av-solutions") {
    return serviceCategories.find((cat) => cat.id === "audio-visual-av-solutions") || serviceCategories[0];
  }

  // Check if requested slug is actually a tab's slug
  for (const cat of serviceCategories) {
    const hasTab = cat.tabs.some((t) => t.slug === clean || t.id === clean);
    if (hasTab) return cat;
  }

  // Keyword fallbacks
  if (clean.includes("data-center") || clean.includes("datacenter")) {
    return serviceCategories.find((cat) => cat.id === "enterprise-data-center") || serviceCategories[0];
  }
  if (clean.includes("visual") || clean.includes("audio")) {
    return serviceCategories.find((cat) => cat.id === "audio-visual-av-solutions") || serviceCategories[0];
  }
  if (clean.includes("hardware") || clean.includes("procurement")) {
    return serviceCategories.find((cat) => cat.id === "it-hardware-procurement") || serviceCategories[0];
  }
  if (clean.includes("licens") || clean.includes("software")) {
    return serviceCategories.find((cat) => cat.id === "software-licensing") || serviceCategories[0];
  }
  if (clean.includes("cloud")) {
    return serviceCategories.find((cat) => cat.id === "cloud-solutions") || serviceCategories[0];
  }
  if (clean.includes("network") || clean.includes("security") || clean.includes("threat") || clean.includes("endpoint") || clean.includes("firewall")) {
    return serviceCategories.find((cat) => cat.id === "networking-security") || serviceCategories[0];
  }
  if (clean.includes("support") || clean.includes("maintenance")) {
    return serviceCategories.find((cat) => cat.id === "it-support-maintenance") || serviceCategories[0];
  }
  if (clean.includes("professional") || clean.includes("consult")) {
    return serviceCategories.find((cat) => cat.id === "it-professional-services") || serviceCategories[0];
  }
  if (clean.includes("elv") || clean.includes("cctv") || clean.includes("cabling")) {
    return serviceCategories.find((cat) => cat.id === "elv-solutions") || serviceCategories[0];
  }
  if (clean.includes("infra") || clean.includes("server") || clean.includes("storage") || clean.includes("backup")) {
    return serviceCategories.find((cat) => cat.id === "it-infrastructure") || serviceCategories[0];
  }

  return serviceCategories[0];
};

export const getTabBySlugs = (categorySlug, tabSlug) => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  if (!tabSlug) return category.tabs[0];
  const tab = category.tabs.find((t) => t.slug === tabSlug || t.id === tabSlug);
  return tab || category.tabs[0];
};

export const servicesList = serviceCategories.map((cat) => ({
  id: cat.id,
  slug: cat.slug,
  title: cat.title,
  shortTitle: cat.shortTitle,
  path: cat.path,
  image: cat.image,
  icon: cat.icon,
  tagline: cat.tagline,
  summary: cat.description1,
  tabsCount: cat.tabs.length
}));
