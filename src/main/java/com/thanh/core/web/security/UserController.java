package com.thanh.core.web.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * This controller provides the public API that is used to return the information
 * of the authenticated user.
 *
 * @author Petri Kainulainen
 */
@RestController
final class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    /**
     *
     * @param authentication will be injected by spring security
     * @return
     */
    @RequestMapping(value = "/api/authenticated-user", method = RequestMethod.GET)
    public com.thanh.core.data.User getAuthenticatedUser(Authentication authentication) {
        LOGGER.info("Getting authenticated user.");

        if (authentication == null) {
            //If anonymous users can access this controller method, someone has changed
            //the security configuration and it must be fixed.
            LOGGER.error("Authenticated user is not found.");
            throw new AccessDeniedException("Anonymous users cannot request the information of the authenticated user.");
        }
        else {
            LOGGER.info("User with username: {} is authenticated", authentication.getPrincipal());
            com.thanh.core.data.User user = (com.thanh.core.data.User) authentication.getDetails();
            return user;
        }
    }
}
