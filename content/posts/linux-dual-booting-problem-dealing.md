---
title: "Dual booting Windows and Arch time zone problem "
description: "Dealing with dual booting problem"
thumbnail: "/images/posts/c4bc2e8e-3861-4140-a5e7-bf58d457b6a6.png"
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
