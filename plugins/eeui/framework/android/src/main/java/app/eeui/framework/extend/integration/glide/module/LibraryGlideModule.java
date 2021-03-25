package app.eeui.framework.extend.integration.glide.module;

import android.content.Context;
import androidx.annotation.NonNull;
import app.eeui.framework.extend.integration.glide.Glide;
import app.eeui.framework.extend.integration.glide.Registry;

/**
 * Registers a set of components to use when initializing Glide within an app when
 * Glide's annotation processor is used.
 *
 * <p>Any number of LibraryGlideModules can be contained within any library or application.
 *
 * <p>LibraryGlideModules are called in no defined order. If LibraryGlideModules within an
 * application conflict, {@link AppGlideModule}s can use the
 * {@link app.eeui.framework.extend.integration.glide.annotation.Excludes} annotation to selectively remove one or more of
 * the conflicting modules.
 */
@SuppressWarnings("deprecation")
public abstract class LibraryGlideModule implements RegistersComponents {
  @Override
  public void registerComponents(@NonNull Context context, @NonNull Glide glide,
      @NonNull Registry registry) {
    // Default empty impl.
  }
}