/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides utility functions and classes.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.2.0
 */

import decodeCodeCharacterHtmlEntities from "./decodeCodeCharacterHtmlEntities";
import getSemVerFromGitDescribe from "./getSemVerFromGitDescribe";
import isRouteInternal from "./isRouteInternal";
import isRoutePartiallyMatch from "./isRoutePartiallyMatch";
import { readSessionCache, writeSessionCache } from "./sessionCache";
import sectionIdFor from "./sectionIdFor";

export {
  decodeCodeCharacterHtmlEntities,
  getSemVerFromGitDescribe,
  isRouteInternal,
  isRoutePartiallyMatch,
  readSessionCache,
  sectionIdFor,
  writeSessionCache
};
