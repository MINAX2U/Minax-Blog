---
title: "Dual booting Windows and Arch time zone problem "
description: "Dealing with dual booting problem"
thumbnail: "/images/posts/90002ee7-6c5f-4b37-b887-3b2bec80a1d0.png"
date: "2025-06-27"
tags: ["Linux","Life"]
---

# Cause


Arch uses UTC (Universal Coordinated Time) and Windows uses local time.


# Solution

1. Open **Registry Editor** in Windows
2. Go to HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TimeZoneInformation
3. Right-click in the right pane > **New > DWORD (32-bit) Value**.
4. Name it: `RealTimeIsUniversal`
5. Double-click it and set the value to `1`
6. Reboot
