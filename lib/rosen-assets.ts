/**
 * Rosen Relations Asset Registry
 *
 * Required images must be copied into /public/assets/rosen/ with these exact filenames:
 *   - Rosen Relations 4.jpg
 *   - Rosen Relations Home Page.jpg
 *   - Rosen Relations Picture.jpg
 *   - Rosen Relations Picture 1.jpg
 *   - Rosen Relations-Edited-USE.png
 *
 * Paths are relative to /public (e.g. /assets/rosen/filename.jpg).
 */

export const rosenAssets = {
  /** Logo for header */
  logo: '/assets/rosen/Rosen Relations Logo.PNG',
  /** Primary hero image for homepage */
  hero: '/assets/rosen/Rosen Relations 4.jpg',
  /** Home page supporting imagery */
  homePage: '/assets/rosen/Rosen Relations Home Page.jpg',
  /** Founder/about insert image */
  founderPicture: '/assets/rosen/Rosen Relations Picture.jpg',
  /** Alternate founder image */
  founderPictureAlt: '/assets/rosen/Rosen Relations Picture 1.jpg',
  /** Ambient background texture */
  editedUse: '/assets/rosen/Rosen Relations-Edited-USE.png',
  /** Brand statement section imagery */
  statementImage: '/assets/rosen/IMG_7359.jpg',
} as const;

export type RosenAssetKey = keyof typeof rosenAssets;
